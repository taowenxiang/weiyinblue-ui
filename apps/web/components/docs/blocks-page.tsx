import {
  Badge,
  Button,
  DataPanel,
  EmptyState,
  FilterBar,
  MetricGrid,
  PageHeader,
  SectionBlock,
  SideNav,
  StatCard,
} from "@weiyinblue/ui"
import {
  BarChart3Icon,
  Layers3Icon,
  Settings2Icon,
  UserRoundCogIcon,
} from "lucide-react"

import { patternMappings } from "../examples/example-data"
import { blockReference } from "./docs-data"
import { DocsReferenceGrid } from "./docs-reference-grid"
import { DocsShell } from "./docs-shell"

function BlocksPage() {
  return (
    <DocsShell>
      <div className="grid gap-10">
        <PageHeader
          breadcrumb={<Badge variant="outline">Composed building blocks</Badge>}
          description="Blocks exist to solve recurring layout and product patterns without locking consumers out of composition."
          title="Blocks"
        />

        <SectionBlock
          description="These blocks are intended to cover the surfaces you are most likely to rebuild across personal, campus, and admin products."
          title="Layout and product blocks"
        >
          <MetricGrid>
            <StatCard
              delta="+18%"
              hint="Compared with the previous design pass"
              icon={<BarChart3Icon className="size-5" />}
              label="Coverage"
              value="22 exports"
            />
            <StatCard
              delta="v1.0"
              hint="Stable contract, maintenance mode"
              icon={<Layers3Icon className="size-5" />}
              label="Current phase"
              value="Frozen surface"
            />
            <StatCard
              delta="+6"
              hint="Second-wave public blocks"
              icon={<Settings2Icon className="size-5" />}
              label="Block count"
              value="Core + product"
            />
          </MetricGrid>

          <FilterBar actions={<Button>New view</Button>}>
            <Button variant="ghost">All</Button>
            <Button variant="ghost">Campus</Button>
            <Button variant="ghost">Admin</Button>
          </FilterBar>

          <div className="grid gap-4 xl:grid-cols-[280px_minmax(0,1fr)]">
            <SideNav
              items={[
                { href: "#overview", label: "Overview", active: true },
                { href: "#settings", label: "Settings" },
                { href: "#access", badge: <Badge variant="outline">3</Badge>, label: "Access" },
              ]}
            />
            <DataPanel
              action={<Button variant="outline">Manage</Button>}
              description="DataPanel is the default shell for structured content, metrics, and table-like sections."
              title="Panel composition"
            >
              <div className="grid gap-3 md:grid-cols-2">
                <div className="wyb-glass rounded-[calc(var(--radius)*0.9)] p-4">
                  <div className="font-medium text-[var(--text-strong)]">Use for content density</div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Prefer this over freeform cards once the surface has title, description, actions, and structured content.
                  </p>
                </div>
                <div className="wyb-glass rounded-[calc(var(--radius)*0.9)] p-4">
                  <div className="font-medium text-[var(--text-strong)]">Use for dashboards</div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Pair with `MetricGrid`, `Table`, and `PageHeader` for operational screens.
                  </p>
                </div>
              </div>
            </DataPanel>
          </div>

          <EmptyState
            action={<Button variant="subtle">Create settings panel</Button>}
            description="EmptyState stays useful for tables, onboarding flows, and draft-heavy internal products."
            title="No active settings workflow"
          />
        </SectionBlock>

        <SectionBlock
          action={<Badge variant="subtle">Pattern rules</Badge>}
          description="The block layer is now frozen around page headers, panels, metrics, side navigation, and form composition."
          title="Current block additions"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <BlockSummary title="PageHeader, MetricGrid, DataPanel">
              These extend the dashboard and content-shell layer without hiding the underlying primitives.
            </BlockSummary>
            <BlockSummary title="SideNav, FieldRow, FormFooter">
              These stabilize common navigation and form composition patterns before larger workflow abstractions are added.
            </BlockSummary>
            <BlockSummary title="Existing blocks still preserved">
              `Navbar`, `DashboardBlock`, `SectionBlock`, `StatCard`, `FilterBar`, `EmptyState`, and `FormSection` remain part of the stable surface.
            </BlockSummary>
            <BlockSummary title="Future direction">
              Additional workflow-specific blocks should only be added after repeated usage across real projects.
            </BlockSummary>
          </div>
        </SectionBlock>

        <SectionBlock
          action={<Badge variant="subtle">Target surface mapping</Badge>}
          description="These mappings are the current default interpretation of the block layer across portfolio, campus, and admin pages."
          title="Block pattern to surface mapping"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {patternMappings.map((item) => (
              <BlockSummary key={item.pattern} title={item.pattern}>
                {item.targets}
              </BlockSummary>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          action={<Badge variant="subtle">Contract</Badge>}
          description="Blocks are intentionally opinionated. They should remove repeat layout work without hiding the underlying primitives or creating too many near-duplicate shells."
          title="Block reference"
        >
          <DocsReferenceGrid items={blockReference} />
        </SectionBlock>
      </div>
    </DocsShell>
  )
}

function BlockSummary({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="wyb-glass grid gap-2 rounded-[calc(var(--radius)*1.05)] p-4">
      <div className="flex items-center gap-2 font-medium text-[var(--text-strong)]">
        <UserRoundCogIcon className="size-4 text-primary" />
        {title}
      </div>
      <p className="text-sm leading-6 text-muted-foreground">{children}</p>
    </div>
  )
}

export { BlocksPage }
