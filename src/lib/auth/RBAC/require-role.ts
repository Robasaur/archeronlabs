import { redirect } from "next/navigation"
import { requireSession } from "@/lib/auth/require-session"
import { getUserRole } from "@/lib/auth/RBAC/get-user-role"
import { ROLE_RANK, type Role } from "@/lib/auth/RBAC/roles"

export async function requireRole(minRole: Role) {
  const session = await requireSession()
  const role = await getUserRole(session.user.id)

  if (ROLE_RANK[role] < ROLE_RANK[minRole]) redirect("/forbidden")
  return { session, role }
}