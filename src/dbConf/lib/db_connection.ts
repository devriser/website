import mysql, { Connection } from "mysql2/promise";
const create_db_connection = async ({ database_name }: { database_name: string }): Promise<Connection> => {

    type connectionType = {
        host: any,
        database: any,
        user: any,
        password: any,
        port: any
    }

    const connection: connectionType = {
        host: process.env.DATABASE_HOST,
        database: database_name ? database_name : "",
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        port: process.env.DATABASE_PORT
    }
    const dbconnection: Connection = await mysql.createConnection({
        ...connection
    });
    return dbconnection;
}

export default create_db_connection;