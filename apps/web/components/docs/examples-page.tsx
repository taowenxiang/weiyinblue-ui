import {
  Badge,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  PageHeader,
  SectionBlock,
} from "@weiyinblue/ui"

import {
  ExampleIndexCards,
  layoutRules,
  patternMappings,
} from "../examples/example-data"
import { DocsShell } from "./docs-shell"

function ExamplesPage() {
  return (
    <DocsShell progress={100}>
      <div className="grid gap-10">
        <PageHeader
          breadcrumb={<Badge variant="outline">End-to-end references</Badge>}
          description="These pages are the stable contract proof for the three target product surfaces. They should remain buildable from public exports without local style escape hatches."
          title="Examples"
        />

        <SectionBlock
          action={<Badge variant="subtle">Routes</Badge>}
          description="These are the three target product surfaces the package needs to support without drifting into one-off styling."
          title="Dedicated example pages"
        >
          <ExampleIndexCards />
        </SectionBlock>

        <SectionBlock
          action={<Badge variant="subtle">Pattern rules</Badge>}
          description="These layout rules should stay consistent across all three example surfaces."
          title="Page-level layout rules"
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {layoutRules.map((rule) => (
              <Card key={rule.title}>
                <CardHeader>
                  <CardTitle>{rule.title}</CardTitle>
                  <CardDescription>{rule.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          action={<Badge variant="subtle">Target surface mapping</Badge>}
          description="These mappings are the current default interpretation of the stable block system."
          title="Pattern to surface mapping"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {patternMappings.map((item) => (
              <Card key={item.pattern}>
                <CardHeader>
                  <CardTitle>{item.pattern}</CardTitle>
                  <CardDescription>{item.targets}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </SectionBlock>
      </div>
    </DocsShell>
  )
}

export { ExamplesPage }
