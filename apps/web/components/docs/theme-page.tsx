import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  PageHeader,
  SectionBlock,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@weiyinblue/ui"

import { DocsShell } from "./docs-shell"
import { stateMatrix, tokenCategories } from "./docs-data"

function ThemePage() {
  return (
    <DocsShell>
      <div className="grid gap-10">
        <PageHeader
          breadcrumb={<Badge variant="outline">Token contract</Badge>}
          description="The token layer should be treated as a design contract. Components should consume semantic tokens first, and brand-specific values only where the semantic layer is intentionally extended."
          title="Theme"
        />

        <SectionBlock
          description="The system currently groups tokens by the role they play in component and layout construction."
          title="Token categories"
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {tokenCategories.map((category) => (
              <Card key={category.name}>
                <CardHeader>
                  <CardTitle>{category.name}</CardTitle>
                  <CardDescription>{category.note}</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-2">
                  {category.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-[calc(var(--radius)*0.8)] border border-white/40 bg-background/45 px-3 py-2 font-mono text-xs text-muted-foreground dark:border-white/8 dark:bg-background/20"
                    >
                      {item}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          action={<Badge variant="subtle">Motion</Badge>}
          description="Motion should remain subtle, purposeful, and safe under reduced-motion preferences."
          title="Motion guidance"
        >
          <div className="grid gap-4 md:grid-cols-3">
            <GuidelineCard
              description="Use short transitions for hover, focus, and dropdown/sheet feedback."
              title="Fast interactions"
            />
            <GuidelineCard
              description="Reserve stronger entrance motion for sheet, dialog, and page-level reveal moments."
              title="Layered surfaces"
            />
            <GuidelineCard
              description="Any non-essential animation should degrade cleanly when reduced motion is preferred."
              title="Reduced motion"
            />
          </div>
        </SectionBlock>

        <SectionBlock
          description="This matrix is the default reference when styling new components or extending existing ones."
          title="State usage matrix"
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>State</TableHead>
                <TableHead>Guidance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stateMatrix.map((row) => (
                <TableRow key={row.state}>
                  <TableCell className="font-medium text-[var(--text-strong)]">
                    {row.state}
                  </TableCell>
                  <TableCell className="text-muted-foreground">{row.guidance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </SectionBlock>
      </div>
    </DocsShell>
  )
}

function GuidelineCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

export { ThemePage }
