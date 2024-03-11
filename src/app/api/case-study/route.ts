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
    const { title, summary, content, website, topics, bannerImage, isDraft } =
      payload;

    const { createdAt, updatedAt } = getDate();

    const db_create = await create_db({
      query: `CREATE DATABASE IF NOT EXISTS ${db_name}`,
    });

    if (db_create.status_code === 200) {
      const blog_post_table_create_res: any = await createOrUpdateTable({
        db_name: db_name,
        query: `
      CREATE TABLE IF NOT EXISTS CaseStudy (
        caseID INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(255),
        summary TEXT,
        content TEXT,
        selectedRadio1 INT,
        topics JSON,
        bannerImage VARCHAR(2083) DEFAULT NULL,
        createdAt VARCHAR(20) NOT NULL,
        updatedAt VARCHAR(20) NOT NULL,
        status VARCHAR(20) DEFAULT 'draft' NOT NULL
      )
    `,
      });

      if (blog_post_table_create_res.status_code === 200) {
        const status = isDraft ? "draft" : "published";

        const insert_blog_post_data: any = await query({
          db_name: db_name,
          query: `
        INSERT INTO CaseStudy (title, summary, content, selectedRadio1, topics, bannerImage, createdAt, updatedAt, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
          values: [
            title,
            summary,
            content,
            website,
            JSON.stringify(topics),
            bannerImage,
            createdAt,
            updatedAt,
            status,
          ],
        });

        if (insert_blog_post_data.status_code === 200) {
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
    const url = new URL(request.url);
    const caseID = url.searchParams.get("caseID");
    const isDraftParam = url.searchParams.get("isDraft");

    let queryStr = `SELECT * FROM CaseStudy`;

    if (caseID) {
      queryStr += ` WHERE caseID = ?`;
    }

    if (isDraftParam) {
      queryStr += caseID ? ` AND status = 'draft'` : ` WHERE status = 'draft'`;
    }

    const values = caseID ? [caseID] : [];

    const get_blog_post_data: any = await query({
      db_name: db_name,
      query: queryStr,
      values: values,
    });

    return NextResponse.json(get_blog_post_data, {
      status: get_blog_post_data.status_code,
    });
  } catch (error: any) {
    const res_json = handleCatchError(error);
    return NextResponse.json(res_json, { status: res_json.status_code });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const caseID = url.searchParams.get("caseID");

    if (!caseID) {
      return NextResponse.json(
        { ...ApiResponseFailed, message: "caseID is required for deletion." },
        { status: 400 }
      );
    }

    const delete_blog_post_data: any = await query({
      db_name: db_name,
      query: `DELETE FROM CaseStudy WHERE caseID = ?`,
      values: [caseID],
    });

    if (delete_blog_post_data.status_code === 200) {
      return NextResponse.json(
        {
          ...delete_blog_post_data,
          message: "Blog post deleted successfully.",
        },
        { status: delete_blog_post_data.status_code }
      );
    } else {
      return NextResponse.json(delete_blog_post_data, {
        status: delete_blog_post_data.status_code,
      });
    }
  } catch (error: any) {
    const res_json = handleCatchError(error);
    return NextResponse.json(res_json, { status: res_json.status_code });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const caseID = url.searchParams.get("caseID");

    if (!caseID) {
      return NextResponse.json(
        { ...ApiResponseFailed, message: "caseID is required for updating." },
        { status: 400 }
      );
    }

    const payload: any = await request.json();
    const { title, summary, content, website, topics, bannerImage } = payload;

    const { updatedAt } = getDate();

    const update_blog_post_data: any = await query({
      db_name: db_name,
      query: `
        UPDATE CaseStudy
        SET title = ?, summary = ?, content = ?, selectedRadio1 = ?, topics = ?, bannerImage = ?, updatedAt = ?
        WHERE caseID = ?
      `,
      values: [
        title,
        summary,
        content,
        website,
        JSON.stringify(topics),
        bannerImage,
        updatedAt,
        caseID,
      ],
    });

    if (update_blog_post_data.status_code === 200) {
      return NextResponse.json(
        {
          ...update_blog_post_data,
          message: "Blog post updated successfully.",
        },
        { status: update_blog_post_data.status_code }
      );
    } else {
      return NextResponse.json(update_blog_post_data, {
        status: update_blog_post_data.status_code,
      });
    }
  } catch (error: any) {
    const res_json = handleCatchError(error);
    return NextResponse.json(res_json, { status: res_json.status_code });
  }
}
