import { requireRole } from "@/lib/auth/RBAC/require-role"

export default async function AdminPage() {
  const { session, role } = await requireRole("ADMIN")

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin</h1>
      <p className="mt-2 opacity-80">
        {session.user.email ?? session.user.name ?? session.user.id} ({role})
      </p>
    </div>
  )
}