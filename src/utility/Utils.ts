// import bcrypt from 'bcryptjs'
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import fs from "fs";
// import ShortUniqueId from 'short-unique-id';
// import XLSX from 'xlsx'
import { create_db_table } from "@/dbConf/lib/create_db_table";
import { ApiResponseFailed, ApiResponseSuccess } from "@/dbConf/ApiConf";
// import AES from 'crypto-js/aes';
// import { enc } from 'crypto-js';
import { create_db } from "@/dbConf/lib/create_db";
// const secretKey: any = process.env.secret
// export const hashData = async (data: any) => {
//     try {
//         if (data) {
//             const salt = await bcrypt.genSalt(10)
//             const hashedData = await bcrypt.hash(data, salt)
//             return hashedData
//         } else {
//             return null
//         }
//     } catch (error: any) {
//         return null
//     }
// }

// export const getDataFromToken = (request: NextRequest) => {
//   try {
//     const token: string = request.cookies.get("token")?.value || "";
//     const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET_KEY!);
//     const res_data = ApiResponseSuccess({
//       status_code: 200,
//       message: "Data fetch successfully from token!",
//       data: {
//         user_data: decodedToken,
//         token,
//       },
//     });
//     return res_data;
//   } catch (error: any) {
//     const res_data = ApiResponseFailed({
//       status_code: 403,
//       message: error.message,
//     });
//     return res_data;
//   }
// };

export const getDate = () => {
  const date: Date = new Date();
  const timestamp_date: number = date.valueOf() / 1000;
  const createdAt: string = String(Math.floor(timestamp_date));
  const updatedAt: string = String(Math.floor(timestamp_date));
  return { createdAt, updatedAt };
};

export const getPaginationParams = ({
  currentPage,
  perPage,
}: {
  currentPage: string;
  perPage: string;
}) => {
  const limit: string = parseInt(perPage).toString();
  const offset = ((parseInt(currentPage) - 1) * parseInt(limit)).toString();
  return { limit, offset };
};

export const getBufferFromFile = async (file: File) => {
  if (file) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    return buffer;
  } else {
    return null;
  }
};

export const generateJwtToken = async (data: any) => {
  const secret_key: any = process.env.JWT_SECRET_KEY;
  const token = await jwt.sign(data, secret_key, { expiresIn: "7d" });
  return token;
};

export const validateJsonKeys = (payload: any, expectedKeys: any) => {
  const payloadKeys = Object.keys(payload).map((item) => {
    return item.trim();
  });

  // Check if all expected keys are present in the payload
  for (const key of expectedKeys) {
    if (!payloadKeys.includes(key)) {
      return false;
    }
  }

  // Check if there are any extra keys in the payload
  for (const key of payloadKeys) {
    if (!expectedKeys.includes(key)) {
      return false;
    }
  }
  return true;
};

export const arrayToObjectWithEmptyValues = (columnNames: any) => {
  return columnNames.reduce((obj: any, columnName: any) => {
    obj[columnName] = "";
    return obj;
  }, {});
};

// export const readExcelFile = async ({ filePath }: { filePath: string }) => {
//     const workbook = await XLSX.readFile(filePath);
//     const sheetName = workbook.SheetNames[0];
//     const sheet = workbook.Sheets[sheetName];

//     const xlData: any[] = XLSX.utils.sheet_to_json(sheet, { header: 1 });

//     // If there are no rows, return an empty array
//     if (xlData.length === 0) {
//         return xlData;
//     }

//     const headers = xlData[0];
//     const defaultObject = arrayToObjectWithEmptyValues(headers);

//     // Fill empty cells with null or empty string
//     const filledData = xlData.slice(1).map((row) =>
//         row.reduce((acc: any, value: any, index: any) => {
//             acc[headers[index].trim()] = value === undefined ? "" : String(value).trim();
//             return acc;
//         }, {})
//     );

//     const newFilledData: any = []
//     filledData.map(item => {
//         newFilledData.push({ ...defaultObject, ...item })
//     })
//     return newFilledData;
// }

export const makeDirectory = async ({
  pathToUpload,
}: {
  pathToUpload: any;
}) => {
  await fs.mkdir(pathToUpload, { recursive: true }, async (error) => {
    if (error) {
      if (error.code === "EEXIST") {
        const res_json = ApiResponseSuccess({
          status_code: 200,
          message: "Directory create successfully!",
          data: "",
        });
        return res_json;
      } else {
        const res_json = ApiResponseFailed({
          status_code: 500,
          message: error.message,
        });
        return res_json;
      }
    }
    const res_json = ApiResponseSuccess({
      status_code: 200,
      message: "Directory create successfully!",
      data: "",
    });
    return res_json;
  });
  const res_json = ApiResponseSuccess({
    status_code: 200,
    message: "Directory create successfully!",
    data: "",
  });
  return res_json;
};

export const getFileExtension = ({ filename }: { filename: string }) => {
  if (filename) {
    return filename.split(".").slice(-1)[0];
  }
  return null;
};

// export const csvParserSync = (csvData: string): any[] => {
//     const parsedData: any[] = [];

//     let headers: any = null
//     csvData.split('\n').forEach((line, index) => {
//         if (index === 0) {
//             // Assuming the first row contains column headers
//             headers = line.split(',');
//             return;
//         }

//         const values = line.split(',');

//         // Check if all values are null (empty)
//         const allValuesNull = values.every((value) => value === null || value === '');

//         if (!allValuesNull) {
//             const rowData: { [key: string]: string | null } = {};

//             // Assuming the number of values matches the number of headers
//             headers.forEach((header: any, i: any) => {
//                 // Convert undefined to null
//                 rowData[header.trim()] = values[i] !== undefined ? values[i].trim() : null;
//             });

//             parsedData.push(rowData);
//         }
//     });

//     return parsedData;
// }

export const handleCatchError = (error: Error) => {
  let errorMessage = "Failed to do something exceptional";
  if (error instanceof Error) {
    errorMessage = error.message;
  }
  const res_json = ApiResponseFailed({
    status_code: 500,
    message: errorMessage,
  });
  return res_json;
};

export const deleteFileInDirectory = async ({
  filePath,
}: {
  filePath: string;
}) => {
  await fs.unlink(filePath, (err) => {
    // const res_json = ApiResponseSuccess({ status_code: 200, message: "Imported Successfully!" })
    // return NextResponse.json(res_json, { status: res_json.status_code })
  });
};

// export const readCsvFile = ({ filePath }: { filePath: any }) => {
//     try {
//         const data = fs.readFileSync(filePath, 'utf8');
//         const parsedData = csvParserSync(data);

//         if (parsedData.length > 0) {
//             const res_json = ApiResponseSuccess({ status_code: 200, message: "Data fetched successfully!", data: parsedData });
//             return res_json;
//         } else {
//             const res_json = ApiResponseFailed({ status_code: 400, message: "Sheet is empty or has no data." });
//             return res_json;
//         }
//     } catch (error: any) {
//         const res_json = handleCatchError(error)
//         return res_json
//     }
// }

// export const generateUniqueID = () => {
//     const { randomUUID } = new ShortUniqueId({
//         length: 10,
//         dictionary: 'alphanum_lower'
//     });
//     return randomUUID()
// }

export const repeatString = ({
  str,
  times,
  prefix,
  suffix,
}: {
  str: string;
  times: number;
  prefix?: string;
  suffix?: string;
}) => {
  if (str) {
    const result: any = [];
    for (let i = 0; i < times; i++) {
      result.push(`${prefix ? prefix : ""}${str}${suffix ? suffix : ""}`);
    }
    return result;
  }
  return "";
};

export const isFileSizeValid = ({
  file,
  size_in_mb,
}: {
  file: File;
  size_in_mb: number;
}) => {
  // Check if the file object is valid
  if (!file || !file.size) {
    return false;
  }

  // Convert file size to MB
  const fileSizeInMB = file.size / (1024 * 1024);

  // Check if the file size is within the limit (3 MB)
  const maxSizeInMB = size_in_mb;
  if (fileSizeInMB <= maxSizeInMB) {
    return true;
  } else {
    return false;
  }
};

export const groupDataByKeys = (
  data: { [key: string]: any },
  keys: string[]
): Record<string, any> => {
  const groupedData: Record<string, any> = {};

  data.forEach((item: any) => {
    let currentGroup: Record<string, any> = groupedData;

    keys.forEach((key) => {
      const value = item[key] || "Unknown";

      if (!currentGroup[value]) {
        currentGroup[value] = {};
      }

      currentGroup = currentGroup[value];
    });

    if (!currentGroup.items) {
      currentGroup.items = [];
    }

    currentGroup.items.push(item);
  });

  return groupedData;
};

function extractColumnNames(sqlStatement: any) {
  const startIndex = sqlStatement.indexOf("(") + 1;
  const endIndex = sqlStatement.lastIndexOf(")");
  const columnsSubstring = sqlStatement.substring(startIndex, endIndex);
  const t1: any = {};
  columnsSubstring.split(",\n").map((ii: any) => {
    const colName = ii.trim().split(" ")[0];
    if (!["FOREIGN"].includes(colName)) {
      const colType = ii.trim().split(" ").slice(1).join(" ");
      t1[colName] = colType;
      // t1.push(ii.trim().split(" ")[0]);
    }
  });
  return t1;
}

export const createOrUpdateTable = async ({
  query,
  db_name,
}: {
  query: any;
  db_name: any;
}) => {
  const tableName = query.match(/CREATE TABLE (\w+)/)[1];

  const layoutData_table_create: any = await create_db_table({
    db_name: db_name,
    query: `SHOW TABLES LIKE '${tableName}'`,
  });

  if (layoutData_table_create.data.length === 0) {
    // Table does not exist, create it
    const layoutData_table_create: any = await create_db_table({
      db_name: db_name,
      query: query,
    });
    return layoutData_table_create;
  } else {
    // Table exists, check and modify columns if needed
    const tabDescribe: any = await create_db_table({
      db_name: db_name,
      query: `DESCRIBE ${tableName}`,
    });

    if (tabDescribe.status_code === 200) {
      if (tabDescribe.data.length > 0) {
        // Get table's column
        const existingColumns = tabDescribe.data;

        // Extract column with its type in SQL query
        const sqlColumns = extractColumnNames(query);

        // Check for modifications in existing columns
        const modifiedColumns = existingColumns.filter(
          (existingColumn: any) => {
            const columnName = existingColumn.Field;
            return (
              sqlColumns.hasOwnProperty(columnName) &&
              existingColumn.Type.toLowerCase() !==
                sqlColumns[columnName].toLowerCase()
            );
          }
        );

        if (modifiedColumns.length > 0) {
          // Columns found to modify, generate ALTER TABLE MODIFY COLUMN query
          const modifyColumnsQueries = modifiedColumns.map(
            (modifiedColumn: any) => {
              const columnName = modifiedColumn.Field;
              const newColumnType = sqlColumns[columnName];
              return `ALTER TABLE ${tableName} MODIFY COLUMN ${columnName} ${newColumnType}`;
            }
          );

          for (const modifyQuery of modifyColumnsQueries) {
            const modifyColumnsResult: any = await create_db_table({
              db_name: db_name,
              query: modifyQuery,
            });

            if (modifyColumnsResult.status_code === 200) {
              // console.log(`Column ${modifiedColumns[0].Field} modified successfully.`);
            } else {
              // console.error(`Error modifying column: ${modifyColumnsResult.message}`);
            }
          }
        }

        // Get only new columns
        const newColumns = Object.keys(sqlColumns).filter(
          (column: any) =>
            !existingColumns
              .map((existingColumn: any) => existingColumn.Field)
              .includes(column)
        );

        if (newColumns.length > 0) {
          // New columns found, add new column in the table
          const colFinalArr: any = [];
          newColumns.map((colName) => {
            colFinalArr.push(`${colName} ${sqlColumns[colName]}`);
          });

          const alterTableQuery = `ALTER TABLE ${db_name}.${tableName} ADD COLUMN ${colFinalArr.join(
            ", ADD COLUMN "
          )}`;
          const alter_table_create: any = await create_db_table({
            db_name: db_name,
            query: alterTableQuery,
          });
          delete alter_table_create.data;
          const res_json = {
            ...alter_table_create,
            message: `Columns ${newColumns.join(", ")} added successfully.`,
          };
          return res_json;
        } else {
          // No new columns or modified columns, table is up to date
          const res_json = ApiResponseSuccess({
            status_code: 200,
            message: `Table already exists and is up to date.`,
          });
          return res_json;
        }
      } else {
        // Handle the case when the DESCRIBE query returns no data
        const res_json = {
          ...tabDescribe,
          message: `Error describing table: No data returned.`,
        };
        return res_json;
      }
    } else {
      return tabDescribe;
    }
  }
};

// export const getEncryptUri = (data: string) => {
//     const ciphertext = AES.encrypt(data, secretKey).toString();
//     const uri = encodeURIComponent(ciphertext.toString())
//     return uri
// }

// export const getDecryptUri = (uri: string) => {
//     const decodedStr = decodeURIComponent(uri);
//     const originalData = AES.decrypt(decodedStr, secretKey).toString(enc.Utf8);
//     return originalData
// }

export const checkDatabaseIsExist = async ({
  database_name,
}: {
  database_name: string;
}) => {
  const show_db_res = await create_db({
    query: `SHOW DATABASES;`,
  });
  if (show_db_res.status_code === 200) {
    const { data } = show_db_res;
    const getDatabase = data.filter(
      (io: any) => io.Database.toLowerCase() === database_name.toLowerCase()
    );
    if (Array.isArray(getDatabase) && getDatabase.length > 0) {
      return true;
    }
    return false;
  } else {
    return show_db_res;
  }
};
