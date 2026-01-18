import { db } from "@/lib/db"
import { isRole, type Role } from "@/lib/auth/RBAC/roles"

export async function getUserRole(userId: string): Promise<Role> {
  const user = await db.user.findUnique({
    where: { id: userId },
    select: { role: true },
  })

  const r = user?.role ?? "USER"
  return isRole(r) ? r : "USER"
}