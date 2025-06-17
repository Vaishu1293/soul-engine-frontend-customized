import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST() {
  const response = NextResponse.json({ message: "Logged out" });

  response.headers.set(
    "Set-Cookie",
    serialize("soul_token", "", {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 0, // 👈 clears it
    })
  );

  console.log("Token removed from cookie");

  return response;
}
