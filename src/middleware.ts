import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("soul_token")?.value;
  
  // List the protected routes
  const protectedPaths = ["/dashboard", "/tarot-draw", "/complete-profile"];
  const { pathname } = request.nextUrl;

  const isProtected = protectedPaths.some((path) =>
    pathname.startsWith(path) || pathname === path
  );

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/tarot-draw", "/complete-profile"],
};
