import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as cookie from "cookie"; // ✅ fix import

export async function POST(req: NextRequest) {
  const body = await req.json();
  const token = body.token;

  if (!token) {
    return NextResponse.json({ error: "Token missing" }, { status: 400 });
  }

  // Set token in cookie
  const cookieHeader = cookie.serialize("soul_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24, // 1 day
    sameSite: "lax",
    path: "/",
  });

  return new NextResponse(
    JSON.stringify({ message: "Token set in cookie" }),
    {
      status: 200,
      headers: {
        "Set-Cookie": cookieHeader,
        "Content-Type": "application/json",
      },
    }
  );
}
