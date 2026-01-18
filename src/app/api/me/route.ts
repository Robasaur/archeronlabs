import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const url = new URL(req.url)
  const origin = `${url.protocol}//${url.host}`

  const r = await fetch(`${origin}/api/auth/get-session`, {
    headers: { cookie: req.headers.get("cookie") ?? "" },
    cache: "no-store",
  })

  const session = r.ok ? await r.json() : null
  return NextResponse.json({ session })
}