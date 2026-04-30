import { Badge, Card, CardContent, CardHeader, CardTitle } from "@weiyinblue/ui"

type DocsReferenceItem = {
  title: string
  intendedUse: string
  variants?: string
  composition: string
  limits: string
}

function DocsReferenceGrid({ items }: { items: DocsReferenceItem[] }) {
  return (
    <div className="grid gap-4 xl:grid-cols-2">
      {items.map((item) => (
        <Card key={item.title}>
          <CardHeader className="gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <CardTitle>{item.title}</CardTitle>
              <Badge variant="outline">Stable</Badge>
            </div>
          </CardHeader>
          <CardContent className="grid gap-4 text-sm leading-6 text-muted-foreground">
            <ReferenceRow label="Intended use" value={item.intendedUse} />
            {item.variants ? <ReferenceRow label="Variant guidance" value={item.variants} /> : null}
            <ReferenceRow label="Composition guidance" value={item.composition} />
            <ReferenceRow label="Limits / non-goals" value={item.limits} />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function ReferenceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1.5">
      <div className="text-xs font-semibold tracking-[0.14em] text-[var(--text-strong)] uppercase">
        {label}
      </div>
      <p>{value}</p>
    </div>
  )
}

export { DocsReferenceGrid }
