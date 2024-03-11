import { NextResponse, NextRequest } from "next/server";

let homeContent = {
  title: "DevRiser Vision to Next Generation Rising of Software Development",
  description:
    "Your gateway to next-gen software solutions: AI, blockchain, web, mobile, and more. Innovation starts by your vision and our expertise.",
};

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(homeContent, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error fetching home content", error },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const payload: any = await request.json();
    homeContent = { title: payload.title, description: payload.description };

    return NextResponse.json(
      { message: "Home content updated successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error updating home content", error },
      { status: 500 }
    );
  }
}
