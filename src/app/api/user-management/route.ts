import nodemailer from "nodemailer";
import { customAlphabet } from "nanoid";
import bcrypt from "bcryptjs";
import {
  getDate,
  createOrUpdateTable,
  handleCatchError,
} from "@/utility/Utils";
import { ApiResponseFailed, ApiResponseSuccess } from "@/dbConf/ApiConf";
import { query } from "@/dbConf/lib/db";
import { db_name } from "@/dbConf/dbConf";
import { create_db } from "@/dbConf/lib/create_db";
import { NextRequest, NextResponse } from "next/server";
import sendMail from "@/services/email/EmailService";

const generatePassword = () => {
  const nanoid = customAlphabet(
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    8
  );
  return nanoid();
};
export async function POST(request: NextRequest) {
  try {
    const payload: any = await request.json();
    const {
      aboutCompany,
      address,
      behance,
      city,
      country,
      designation,
      dribble,
      email,
      firstName,
      lastName,
      linkdin,
      phone,
      profileImage,
      role,
    } = payload;

    const { createdAt, updatedAt } = getDate();

    const db_create = await create_db({
      query: `CREATE DATABASE IF NOT EXISTS ${db_name}`,
    });

    if (db_create.status_code === 200) {
      const user_table_create_res: any = await createOrUpdateTable({
        db_name: db_name,
        query: `
            CREATE TABLE IF NOT EXISTS User (
              userId INT PRIMARY KEY AUTO_INCREMENT,
              aboutCompany TEXT,
              address TEXT,
              behance TEXT,
              city varchar(200),
              country varchar(200),
              designation varchar(200),
              dribble TEXT,
              email varchar(200),
              firstName varchar(200),
              lastName varchar(200),
              linkdin TEXT,
              phone TEXT,
              profileImage varchar(2083) DEFAULT NULL,
              role TEXT,
              password varchar(200) NOT NULL,
              createdAt varchar(20) NOT NULL,
              updatedAt varchar(20) NOT NULL
            )
          `,
      });

      if (user_table_create_res.status_code === 200) {
        // Generate a unique password
        const password = generatePassword();

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const insertUserData: any = await query({
          db_name: db_name,
          query: `
          INSERT INTO User ( aboutCompany, address, behance, city, country, designation, dribble, email, firstName, lastName, linkdin, phone, profileImage, role, password, createdAt, updatedAt)
          VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `,
          values: [
            aboutCompany,
            address,
            behance,
            city,
            country,
            designation,
            dribble,
            email,
            firstName,
            lastName,
            linkdin,
            phone,
            profileImage,
            role,
            hashedPassword,
            createdAt,
            updatedAt,
          ],
        });

        if (insertUserData.status_code === 200) {
          delete insertUserData.data;
          sendMail({
            email: email,
            subject: "User Created",
            payload: payload,
            html: `
                <p>Hello ${firstName} ${lastName},</p>
                <p>You have been created as a user with the role: ${role}</p>
                <p>Your username is: ${email}</p>
                <p>Your password is: ${password}</p>
                <p>Login to your account <a href="http://localhost:3000/web-dashboard">here</a></p>
              `,
          });

          return NextResponse.json(
            { ...insertUserData, message: "user post stored!" },
            { status: insertUserData.status_code }
          );
        } else {
          return NextResponse.json(insertUserData, {
            status: insertUserData.status_code,
          });
        }
      } else {
        return NextResponse.json(user_table_create_res, {
          status: user_table_create_res.status_code,
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
    const userID = url.searchParams.get("userId");

    let queryStr = `SELECT * FROM User`;

    if (userID) {
      queryStr += ` WHERE userId = ?`;
    }

    const values = userID ? [userID] : [];

    const get_user_post_data: any = await query({
      db_name: db_name,
      query: queryStr,
      values: values,
    });

    return NextResponse.json(get_user_post_data, {
      status: get_user_post_data.status_code,
    });
  } catch (error: any) {
    const res_json = handleCatchError(error);
    return NextResponse.json(res_json, { status: res_json.status_code });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const userId = url.searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { ...ApiResponseFailed, message: "userId is required for deletion." },
        { status: 400 }
      );
    }

    const delete_blog_post_data: any = await query({
      db_name: db_name,
      query: `DELETE FROM User WHERE userId = ?`,
      values: [userId],
    });

    if (delete_blog_post_data.status_code === 200) {
      return NextResponse.json(
        {
          ...delete_blog_post_data,
          message: "User deleted successfully.",
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
