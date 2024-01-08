

export const awsConfig = {
    region: "ap-south-1",
    db_engine: "mysql",
    db_engine_version: "8.0.34",
    accessKeyId: process.env.AWS_USER_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_USER_SECRET_ACCESS_KEY
}