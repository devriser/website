import { NextResponse, NextRequest } from "next/server";
import { getBufferFromFile, makeDirectory, handleCatchError, deleteFileInDirectory, isFileSizeValid, createOrUpdateTable } from "@/utility/Utils";
import { writeFile } from 'fs/promises';
import { createReadStream } from "fs";
import { ApiResponseFailed, ApiResponseSuccess } from "@/dbConf/ApiConf";
import { S3 } from "aws-sdk";
import { v4 as uuidv4 } from "uuid";
import { awsConfig } from "@/dbConf/awsConfig";

export async function POST(request: NextRequest) {
    try {
        const s3 = new S3({
            accessKeyId: awsConfig.accessKeyId,
            secretAccessKey: awsConfig.secretAccessKey
        })

        const formData = await request.formData();
        const file: any = formData.get("file")
        const fileSizeInMb = 100
        const isFileValid = isFileSizeValid({ file, size_in_mb: fileSizeInMb })
        if (isFileValid === true) {

            const buffer: any = await getBufferFromFile(file)
            const pathToUpload: string = "Uploads/upload-file"
            const mkDirRes = await makeDirectory({ pathToUpload })
            if (mkDirRes.status_code === 200) {
                const filePath = `${pathToUpload}/${file.name}`;
                await writeFile(filePath, buffer)

                const params = {
                    Bucket: "devriser-website",
                    Key: `contact/${uuidv4()}-${file.name}`,
                    Body: createReadStream(filePath),
                    ContentType: file.type,
                    ACL: "public-read"
                };

                try {
                    const data = await s3.upload(params).promise();
                    const res_json = ApiResponseSuccess({ status_code: 200, message: "File Uploaded Successfully!", data: { file_url: data.Location } })
                    await deleteFileInDirectory({ filePath })
                    return NextResponse.json(res_json, { status: res_json.status_code })
                } catch (error: any) {
                    const res_json = handleCatchError(error)
                    await deleteFileInDirectory({ filePath })
                    return NextResponse.json(res_json, { status: res_json.status_code })
                }
            } else {
                return NextResponse.json(mkDirRes, { status: mkDirRes.status_code })
            }
        } else {
            const res_json = ApiResponseFailed({ status_code: 400, message: `Maximum ${fileSizeInMb} MB file size is required` })
            return NextResponse.json(res_json, { status: res_json.status_code })
        }
    } catch (error: any) {
        const res_json = handleCatchError(error)
        return NextResponse.json(res_json, { status: res_json.status_code })
    }
}
