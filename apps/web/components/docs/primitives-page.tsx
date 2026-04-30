import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  PageHeader,
  SectionBlock,
} from "@weiyinblue/ui"

import { DocsPrimitivesDemo } from "./docs-primitives-demo"
import { primitiveDocs, primitiveReference } from "./docs-data"
import { DocsReferenceGrid } from "./docs-reference-grid"
import { DocsShell } from "./docs-shell"

function PrimitivesPage() {
  return (
    <DocsShell>
      <div className="grid gap-10">
        <PageHeader
          breadcrumb={<Badge variant="outline">Public components</Badge>}
          description="Primitives are intentionally narrow in variants but broad in reuse. The goal is stable, composable building blocks with coherent interaction behavior."
          title="Primitives"
        />

        <SectionBlock
          description="Every preview below uses the public package surface instead of local app-only helpers."
          title="Interactive preview"
        >
          <DocsPrimitivesDemo />
        </SectionBlock>

        <SectionBlock
          action={<Badge variant="subtle">Usage</Badge>}
          description="Use these imports as the base API surface when integrating the package into another product."
          title="Import patterns"
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {primitiveDocs.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="overflow-x-auto rounded-[calc(var(--radius)*0.85)] bg-[var(--text-strong)]/95 p-4 text-sm text-white">
                    <code>{item.code}</code>
                  </pre>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          action={<Badge variant="subtle">Contract</Badge>}
          description="Every public primitive below includes intended usage, composition guidance, and explicit non-goals so the package can stay stable as it grows."
          title="Primitive reference"
        >
          <DocsReferenceGrid items={primitiveReference} />
        </SectionBlock>
      </div>
    </DocsShell>
  )
}

export { PrimitivesPage }
