import { EmptyState } from "@/components/empty-state"
import { PageHeader } from "@/components/header/header"

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        description="Cloud labs, systems, and experiments — documented end-to-end."
      />
      <EmptyState
        title="No projects yet"
        description="Once the database is wired up, projects will show up here."
      />
    </>
  )
}