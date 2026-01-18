import { redirect } from "next/navigation"
import { getSession, type SessionUser } from "@/lib/auth/session"

export type AuthedSession = { user: SessionUser }

export async function requireSession(): Promise<AuthedSession> {
  const session = await getSession()

  const user = session?.user
  if (!user?.id) redirect("/login")

  return { user }
}