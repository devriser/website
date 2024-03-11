import { NextResponse, NextRequest } from "next/server";
import {
  getDate,
  createOrUpdateTable,
  handleCatchError,
} from "@/utility/Utils";
import { ApiResponseFailed, ApiResponseSuccess } from "@/dbConf/ApiConf";
import { query } from "@/dbConf/lib/db";
import { db_name } from "@/dbConf/dbConf";
import { create_db } from "@/dbConf/lib/create_db";

export async function POST(request: NextRequest) {
  try {
    const payload: any = await request.json();
    const { topic } = payload;

    const { createdAt, updatedAt } = getDate();

    const db_create = await create_db({
      query: `CREATE DATABASE IF NOT EXISTS ${db_name}`,
    });

    if (db_create.status_code === 200) {
      const blog_post_table_create_res: any = await createOrUpdateTable({
        db_name: db_name,
        query: `
          CREATE TABLE IF NOT EXISTS PortfolioTopic (
            id INT PRIMARY KEY AUTO_INCREMENT,
            topic TEXT,
            createdAt VARCHAR(20) NOT NULL,
            updatedAt VARCHAR(20) NOT NULL
          )
        `,
      });

      if (blog_post_table_create_res.status_code === 200) {
        const insert_blog_post_data: any = await query({
          db_name: db_name,
          query: `
            INSERT INTO PortfolioTopic (topic, createdAt, updatedAt)
            VALUES (?, ?, ?)
          `,
          values: [topic, createdAt, updatedAt],
        });

        if (insert_blog_post_data.status_code === 200) {
          delete insert_blog_post_data.data;

          return NextResponse.json(
            { ...insert_blog_post_data, message: "Blog post stored!" },
            { status: insert_blog_post_data.status_code }
          );
        } else {
          return NextResponse.json(insert_blog_post_data, {
            status: insert_blog_post_data.status_code,
          });
        }
      } else {
        return NextResponse.json(blog_post_table_create_res, {
          status: blog_post_table_create_res.status_code,
        });
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
    const get_blog_post_data: any = await query({
      db_name: db_name,
      query: `SELECT * FROM PortfolioTopic;`,
      values: [],
    });

    return NextResponse.json(get_blog_post_data, {
      status: get_blog_post_data.status_code,
    });
  } catch (error: any) {
    const res_json = handleCatchError(error);
    return NextResponse.json(res_json, { status: res_json.status_code });
  }
}
