import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { serialize } from "cookie";
import { authOptions } from "../[...nextauth]/route";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.redirect(new URL("/login?error=unauthenticated", req.url));
  }

  const { email, name, image } = session.user;
  const provider = new URL(req.url).searchParams.get("provider");

  try {
    const backendRes = await fetch("http://localhost:5000/api/auth/social-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${email}`,
      },
      body: JSON.stringify({ email, name, image, provider }),
    });

    const result = await backendRes.json();

    if (!backendRes.ok || !result.token) {
      return NextResponse.redirect(new URL("/login?error=token", req.url));
    }

    // ✅ Set token in cookie
    const response = NextResponse.redirect(new URL("/dashboard", req.url));
    response.headers.set(
      "Set-Cookie",
      serialize("soul_token", result.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24,
        sameSite: "lax",
        path: "/",
      })
    );

    return response;
  } catch (err) {
    console.error("Social login callback error:", err);
    return NextResponse.redirect(new URL("/login?error=server", req.url));
  }
}
