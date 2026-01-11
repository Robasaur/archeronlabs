import { EmptyState } from "@/components/empty-state"
import { PageHeader } from "@/components/header/header"

export default function ChatsPage() {
  return (
    <>
      <PageHeader
        title="Chats"
        description="Troubleshooting notes and research captured for future runbooks."
      />
      <EmptyState
        title="No chat entries yet"
        description="Chat entries will be added after Auth + Prisma are connected."
      />
    </>
  )
}