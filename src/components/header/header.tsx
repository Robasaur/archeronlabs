export function PageHeader(props: {
  title: string
  description?: string
  right?: React.ReactNode
}) {
  return (
    <div className="mb-6 flex items-start justify-between gap-4">
      <div>
        <h1 className="text-3xl font-semibold">{props.title}</h1>
        {props.description ? (
          <p className="mt-1 text-sm text-muted-foreground">{props.description}</p>
        ) : null}
      </div>
      {props.right}
    </div>
  )
}