import { NextResponse, NextRequest } from "next/server";
import { getDate, getPaginationParams, handleCatchError, repeatString, createOrUpdateTable } from "@/utility/Utils";
import { ApiResponseFailed, ApiResponseSuccess } from "@/dbConf/ApiConf";
import { query } from "@/dbConf/lib/db";
import { db_name } from "@/dbConf/dbConf";
import { create_db } from "@/dbConf/lib/create_db";

export async function POST(request: NextRequest) {
  try {
    let payload: any = await request.json();
    const { fullName, email, phone, country, faq, document } = payload;

    const { createdAt, updatedAt } = getDate();
    const db_create = await create_db({
      query: `CREATE DATABASE IF NOT EXISTS ${db_name}`
    });
    if (db_create.status_code === 200) {

      const contact_table_create_res: any = await createOrUpdateTable({
        db_name: db_name,
        query: `
          CREATE TABLE IF NOT EXISTS Contact (
            id INT PRIMARY KEY AUTO_INCREMENT,
            fullName VARCHAR(200),
            email VARCHAR(100),
            phone VARCHAR(20),
            country VARCHAR(50),
            faq JSON,
            document VARCHAR(2083) DEFAULT NULL,
            createdAt VARCHAR(20) NOT NULL,
            updatedAt VARCHAR(20) NOT NULL
          )
          `,
      });

      if (contact_table_create_res.status_code === 200) {
        const insert_contact_table_data: any = await query({
          db_name: db_name,
          query: `INSERT INTO Contact (fullName, email, phone, country, faq, document, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          values: [
            fullName,
            email,
            phone,
            country,
            faq,
            document,
            createdAt,
            updatedAt,
          ],
        });
        if (insert_contact_table_data.status_code === 200) {
          delete insert_contact_table_data.data
          return NextResponse.json({ ...insert_contact_table_data, message: "Data stored!" }, { status: insert_contact_table_data.status_code });
        } else {
          return NextResponse.json(insert_contact_table_data, { status: insert_contact_table_data.status_code });
        }
      } else {
        return NextResponse.json(contact_table_create_res, { status: contact_table_create_res.status_code });
      }
    } else {
      return NextResponse.json(db_create, { status: db_create.status_code });
    }
  } catch (error: any) {
    const res_json = handleCatchError(error);
    return NextResponse.json(res_json, { status: res_json.status_code });
  }
}

export async function GET(request: NextRequest) {
  try {
    const get_data: any = await query({
      db_name: db_name,
      query: `SELECT * FROM Contact;`,
      values: [],
    });

    return NextResponse.json(get_data, { status: get_data.status_code });
  } catch (error: any) {
    const res_json = handleCatchError(error);
    return NextResponse.json(res_json, { status: res_json.status_code });
  }
}

// export async function DELETE(request: any) {
//   try {
//     let payload: any = await request.json();
//     const res_data: any = await getDataFromToken(request);
//     if (res_data.status_code === 200) {
//       const { userID, email, userRole, currentOrganizationId } = res_data.data.user_data;
//       const { modelID } = payload;

//       if (Array.isArray(modelID) === true) {
//         const deleteModels: any = await query({
//           db_name: currentOrganizationId,
//           query: `DELETE FROM Models WHERE modelID IN (${modelID.join(",")})`,
//           values: [],
//         });

//         if (deleteModels.status_code === 200) {
//           delete deleteModels.data;
//           const res_data = {
//             ...deleteModels,
//             message: "Models deleted successfully!",
//           };
//           return NextResponse.json(res_data, { status: res_data.status_code });
//         } else {
//           return NextResponse.json(deleteModels, { status: deleteModels.status_code });
//         }
//       } else {
//         const deleteModels: any = await query({
//           db_name: currentOrganizationId,
//           query: `DELETE FROM Models WHERE modelID = ?`,
//           values: [modelID],
//         });
//         if (deleteModels.status_code === 200) {
//           delete deleteModels.data;
//           const res_data = {
//             ...deleteModels,
//             message: "Models deleted successfully!",
//           };
//           return NextResponse.json(res_data, { status: res_data.status_code });
//         } else {
//           return NextResponse.json(deleteModels, { status: deleteModels.status_code });
//         }
//       }
//     } else {
//       return NextResponse.json(res_data, { status: res_data.status_code });
//     }
//   } catch (error: any) {
//     const res_json = handleCatchError(error);
//     return NextResponse.json(res_json, { status: res_json.status_code });
//   }
// }

// export async function PUT(request: NextRequest) {
//   try {
//     let payload: any = await request.json();
//     const res_data: any = await getDataFromToken(request);
//     if (res_data.status_code === 200) {
//       const { modelID, modelData } = payload;
//       const { createdAt, updatedAt } = getDate();
//       const { data } = res_data;
//       const { userID, email, userRole, currentOrganizationId } = data.user_data;

//       const getModelsData: any = await query({
//         db_name: currentOrganizationId,
//         query: `SELECT * FROM Models WHERE modelID = ? `,
//         values: [modelID],
//       });

//       if (getModelsData.status_code === 200 && getModelsData.data.length > 0) {
//         const modelSavedData = getModelsData.data[0];
//         const wholeJson = { ...modelSavedData, ...modelData };

//         delete wholeJson.modelID;
//         delete wholeJson.updatedAt
//         delete wholeJson.updatedBy;

//         const keysData = Object.keys(wholeJson);
//         const valuesData = Object.values(wholeJson);
//         const queryStr: any = [];
//         keysData.map((item) => {
//           queryStr.push(`${item} = ?`);
//         });

//         const user_OrgData: any = await query({
//           db_name: currentOrganizationId,
//           query: `UPDATE Models SET ${queryStr.join(", ")}, updatedAt = ?, updatedBy = ? WHERE modelID = ?`,
//           values: [...valuesData, updatedAt, userID, modelID],
//         });

//         if (user_OrgData.status_code === 200) {
//           delete user_OrgData.data;
//           user_OrgData.message = "Models updated successfully!";
//           return NextResponse.json(user_OrgData, { status: user_OrgData.status_code });
//         } else {
//           return NextResponse.json(user_OrgData, { status: user_OrgData.status_code });
//         }
//       } else {
//         return NextResponse.json(getModelsData, { status: getModelsData.status_code });
//       }
//     } else {
//       return NextResponse.json(res_data, { status: res_data.status_code });
//     }
//   } catch (error: any) {
//     const res_json = handleCatchError(error);
//     return NextResponse.json(res_json, { status: res_json.status_code });
//   }
// }
