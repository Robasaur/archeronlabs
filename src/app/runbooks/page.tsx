import { EmptyState } from "@/components/empty-state"
import { PageHeader } from "@/components/header/header"

export default function RunbooksPage() {
  return (
    <>
      <PageHeader
        title="Runbooks"
        description="Operational documentation, promoted from chats and hardened over time."
      />
      <EmptyState
        title="No runbooks yet"
        description="Runbooks will appear here once the backend is ready."
      />
    </>
  )
}
