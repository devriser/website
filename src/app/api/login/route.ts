import { NextResponse, NextRequest } from "next/server";
import { generateJwtToken, handleCatchError } from "@/utility/Utils";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
import { query } from "@/dbConf/lib/db";
import { db_name } from "@/dbConf/dbConf";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    let payload: any = await request.json();
    const { email, password } = payload;

    if (email === "admin@devriser.com" && password === "admin") {
      const token = uuidv4();
      const maxAge = 60 * 60 * 24;

      return NextResponse.json(
        {
          message: "Login successful!",
          email: "admin@example.com",
          role: "admin",
          userId: -1,
        },
        {
          status: 200,
          headers: {
            "Set-Cookie": `token=${token}; Max-Age=${maxAge}; Path=/`,
          },
        }
      );
    } else {
      const getUserQuery = `SELECT * FROM User WHERE email = ?`;
      const userResult: any = await query({
        db_name: db_name,
        query: getUserQuery,
        values: [email],
      });

      if (userResult.status_code !== 200 || userResult.data.length === 0) {
        return NextResponse.json(
          { message: "Invalid credentials. Login failed." },
          { status: 401 }
        );
      }

      const user = userResult.data[0];
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        const token = await generateJwtToken({
          email: user.email,
          role: user.role,
          userId: user.userId,
          username: `${user.firstName} ${user.lastName}`,
        });

        const maxAge = 60 * 60 * 24;

        return NextResponse.json(
          {
            message: "Login successful!",
            email: user.email,
            role: user.role,
            userId: user.userId,
            username: `${user.firstName} ${user.lastName}`,
          },
          {
            status: 200,
            headers: {
              "Set-Cookie": `token=${token}; Max-Age=${maxAge}; Path=/`,
            },
          }
        );
      } else {
        return NextResponse.json(
          { message: "Invalid credentials. Login failed." },
          { status: 401 }
        );
      }
    }
  } catch (error: any) {
    const res_json = handleCatchError(error);
    return NextResponse.json(res_json, { status: res_json.status_code });
  }
}

export async function GET(request: NextRequest) {
  try {
    const userId = getUserIdFromToken(request) || -1;

    if (!userId) {
      return NextResponse.json(
        { message: "User not authenticated." },
        { status: 401 }
      );
    }

    if (userId === -1) {
      return NextResponse.json(
        {
          message: "Admin information fetched successfully.",
          userId: -1,
          email: "admin@example.com",
          role: "admin",
          username: "Ibrahim Burhan",
          profileImage:
            "https://devriser-website.s3.amazonaws.com/contact/281b941a-0a1e-4c70-998e-2220ddb34d67-download.png",
          designation: "Devriser CEO",
          phone: "+880 1677 900 900",
          country: "France",
          city: "Paris",
          address: "Paris, France",
          aboutCompany: "Devriser is a leading software development company.",
        },
        { status: 200 }
      );
    }

    const getUserQuery = `SELECT * FROM User WHERE userId = ?`;
    const userResult: any = await query({
      db_name: db_name,
      query: getUserQuery,
      values: [userId],
    });

    if (userResult.status_code === 200 && userResult.data.length > 0) {
      const user = userResult.data[0];

      return NextResponse.json(
        {
          message: "User information fetched successfully.",
          userId: user.userId,
          email: user.email,
          role: user.role,
          username: `${user.firstName} ${user.lastName}`,
          profileImage: user.profileImage,
          aboutCompany: user.aboutCompany,
          address: user.address,
          behance: user.behance,
          city: user.city,
          country: user.country,
          designation: user.designation,
          dribble: user.dribble,
          linkdin: user.linkdin,
          phone: user.phone,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }
  } catch (error: any) {
    const res_json = handleCatchError(error);
    return NextResponse.json(res_json, { status: res_json.status_code });
  }
}

function getUserIdFromToken(request: NextRequest): number | null {
  const token = request.cookies?.get("token")?.value;

  if (!token) {
    return null;
  }

  const decodedToken = decodeToken(token);

  return decodedToken?.userId || null;
}

function decodeToken(token: string): { userId: number } | null {
  try {
    const decoded = jwt.verify(token, "Klzo3r4rouAmYbTAr7ecXV3pMpRD2r9F") as {
      userId: number;
    };

    return { userId: decoded.userId };
  } catch (error) {
    return null;
  }
}
