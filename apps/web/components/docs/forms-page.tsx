import { Badge, PageHeader, SectionBlock } from "@weiyinblue/ui"

import { patternMappings } from "../examples/example-data"
import { DocsReferenceGrid } from "./docs-reference-grid"
import { formReference } from "./docs-data"
import { DocsFormsDemo } from "./docs-forms-demo"
import { DocsShell } from "./docs-shell"

function FormsPage() {
  return (
    <DocsShell>
      <div className="grid gap-10">
        <PageHeader
          breadcrumb={<Badge variant="outline">react-hook-form integration</Badge>}
          description="The form layer is intended to make product forms feel consistent without forcing a custom application architecture."
          title="Forms"
        />

        <SectionBlock
          description="This page demonstrates single-section, multi-field, and mixed-control form composition using the current public API."
          title="Form patterns"
        >
          <DocsFormsDemo />
        </SectionBlock>

        <SectionBlock
          action={<Badge variant="subtle">Pattern rules</Badge>}
          description="These conventions should stay stable as the system expands."
          title="Form rules"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Rule text="Use `FormSection` to group fields that belong to the same decision or workflow step." title="Section structure" />
            <Rule text="Use `FieldRow` for predictable two-column layouts instead of ad hoc grid classes." title="Horizontal composition" />
            <Rule text="Keep errors directly below the affected field and preserve descriptions when not invalid." title="Message placement" />
            <Rule text="Use `FormFooter` for primary/secondary actions and lightweight status text." title="Action rows" />
          </div>
        </SectionBlock>

        <SectionBlock
          action={<Badge variant="subtle">Target surface mapping</Badge>}
          description="These mappings define where the current form patterns are intended to be reused."
          title="Form pattern to surface mapping"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {patternMappings
              .filter((item) => item.pattern.includes("FormSection"))
              .map((item) => (
                <Rule key={item.pattern} text={item.targets} title={item.pattern} />
              ))}
          </div>
        </SectionBlock>

        <SectionBlock
          action={<Badge variant="subtle">Reference</Badge>}
          description="The form layer stays intentionally thin: enough semantics and structure to keep products consistent, without replacing react-hook-form itself."
          title="Form API reference"
        >
          <DocsReferenceGrid items={formReference} />
        </SectionBlock>
      </div>
    </DocsShell>
  )
}

function Rule({ title, text }: { title: string; text: string }) {
  return (
    <div className="wyb-glass grid gap-2 rounded-[calc(var(--radius)*1.05)] p-4">
      <div className="font-medium text-[var(--text-strong)]">{title}</div>
      <p className="text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  )
}

export { FormsPage }
