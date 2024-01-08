import mysql from "mysql2/promise";
import create_db_connection from "./db_connection"
import { ApiResponseFailed, ApiResponseSuccess } from "../ApiConf";
// create the connection to database

export async function query({ db_name, query, values = [] }: { db_name: string; query: string; values: any[] }) {
    try {
        const dbconnection = await create_db_connection({ database_name: db_name })
        // Connect to the database
        const [results] = await dbconnection.execute(query, values);
        dbconnection.end();
        return ApiResponseSuccess({ status_code: 200, message: "Operation succeeded", data: results })
    } catch (error) {
        let errorMessage = "Failed to do something exceptional";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        return ApiResponseFailed({ status_code: 400, message: errorMessage })
    }
}