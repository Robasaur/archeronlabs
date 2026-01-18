import { redirect } from "next/navigation"
import { requireSession } from "@/lib/auth/require-session"
import { getUserRole } from "@/lib/auth/RBAC/get-user-role"
import { type Role } from "@/lib/auth/RBAC/roles"

export async function requireAnyRole(allowed: Role[]) {
  const session = await requireSession()
  const role = await getUserRole(session.user.id)

  if (!allowed.includes(role)) redirect("/forbidden")
  return { session, role }
}