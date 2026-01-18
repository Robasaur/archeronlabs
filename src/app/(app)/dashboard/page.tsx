import { requireSession } from "@/lib/auth/require-session"

export default async function Dashboard() {
  const session = await requireSession()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-2 opacity-80">
        Signed in as {session.user.email ?? session.user.name ?? session.user.id}
      </p>
    </div>
  )
}