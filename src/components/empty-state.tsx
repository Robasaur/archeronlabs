export function EmptyState(props: {
  title: string
  description?: string
}) {
  return (
    <div className="rounded-lg border p-8">
      <h2 className="text-lg font-medium">{props.title}</h2>
      {props.description ? (
        <p className="mt-1 text-sm text-muted-foreground">{props.description}</p>
      ) : null}
    </div>
  )
}