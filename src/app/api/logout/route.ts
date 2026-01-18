import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const url = new URL(req.url)
  const origin = `${url.protocol}//${url.host}`

  await fetch(`${origin}/api/auth/sign-out`, {
    method: "POST",
    headers: { cookie: req.headers.get("cookie") ?? "" },
    cache: "no-store",
  })

  return NextResponse.redirect(new URL("/login", origin))
}