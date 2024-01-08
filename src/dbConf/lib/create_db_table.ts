import mysql from "mysql2/promise";
// create the connection to database
import create_db_connection from "./db_connection"
import { ApiResponseFailed, ApiResponseSuccess } from "../ApiConf";


export async function create_db_table({ db_name, query }: { db_name: string; query: string }) {
    const dbconnection = await create_db_connection({ database_name: db_name })

    // Connect to the database
    try {
        const [results] = await dbconnection.execute(query);
        dbconnection.end();
        return ApiResponseSuccess({ status_code: 200, message: "Table created successfully!", data: results })

    } catch (error) {
        let errorMessage = "Failed to do something exceptional";
        if (error instanceof Error) {
            errorMessage = error.message;
        }

        return ApiResponseFailed({ status_code: 400, message: errorMessage })
    }
}