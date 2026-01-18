import { headers } from "next/headers"

export type SessionUser = {
  id: string
  email?: string | null
  name?: string | null
}

export type BetterAuthSession = {
  user?: SessionUser
} | null

export async function getSession(): Promise<BetterAuthSession> {
  const h = await headers()
  const cookie = h.get("cookie") ?? ""
  const host = h.get("host")
  const proto = h.get("x-forwarded-proto") ?? "http"
  const origin = `${proto}://${host}`

  const r = await fetch(`${origin}/api/auth/get-session`, {
    headers: { cookie },
    cache: "no-store",
  })

  if (!r.ok) return null
  return (await r.json()) as BetterAuthSession
}