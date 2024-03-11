// Example endpoint in the API folder (e.g., pages/api/change-password.js)

import { NextResponse, NextRequest } from "next/server";
import { query } from "@/dbConf/lib/db";
import { db_name } from "@/dbConf/dbConf";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    const userId = getUserIdFromToken(request);

    if (!userId) {
      return NextResponse.json(
        { message: "User not authenticated." },
        { status: 401 }
      );
    }

    const { currentPassword, newPassword } = await request.json();

    const getUserQuery = `SELECT * FROM User WHERE userId = ?`;
    const userResult: any = await query({
      db_name: db_name,
      query: getUserQuery,
      values: [userId],
    });

    if (userResult.status_code === 200 && userResult.data.length > 0) {
      const user = userResult.data[0];

      const isPasswordValid = await bcrypt.compare(
        currentPassword,
        user.password
      );

      if (!isPasswordValid) {
        return NextResponse.json(
          { message: "Current password is incorrect." },
          { status: 401 }
        );
      }

      const hashedNewPassword = await bcrypt.hash(newPassword, 10);
      const updatePasswordQuery = `UPDATE User SET password = ? WHERE userId = ?`;
      await query({
        db_name: db_name,
        query: updatePasswordQuery,
        values: [hashedNewPassword, userId],
      });

      return NextResponse.json(
        { message: "Password updated successfully." },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }
  } catch (error: any) {}
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
