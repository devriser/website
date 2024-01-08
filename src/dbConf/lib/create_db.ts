import mysql from "mysql2/promise";
// create the connection to database
import create_db_connection from "./db_connection"
import { ApiResponseFailed, ApiResponseSuccess } from "../ApiConf";
export async function create_db({ query }: { query: string }) {

    const dbconnection = await create_db_connection({ database_name: "" })
    try {
        const [results] = await dbconnection.execute(query);
        dbconnection.end();
        return ApiResponseSuccess({ status_code: 200, message: "Database created successfully!", data: results })
    } catch (error) {
        let errorMessage = "Failed to do something exceptional";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        return ApiResponseFailed({ status_code: 400, message: errorMessage })
    }
}