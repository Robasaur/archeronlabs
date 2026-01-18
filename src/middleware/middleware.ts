import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const PROTECTED = ["/dashboard", "/admin"]

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (!PROTECTED.some((p) => pathname.startsWith(p))) return NextResponse.next()

  // call Better Auth session endpoint with cookies
  const r = await fetch(new URL("/api/auth/get-session", req.url), {
    headers: { cookie: req.headers.get("cookie") ?? "" },
    cache: "no-store",
  })

  const session = r.ok ? await r.json() : null
  if (!session?.user?.id) {
    const url = req.nextUrl.clone()
    url.pathname = "/login"
    url.searchParams.set("next", pathname)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
}