import { ArrowRightIcon, CheckCircle2Icon, Layers3Icon, ShieldCheckIcon } from "lucide-react"
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  PageHeader,
  SectionBlock,
} from "@weiyinblue/ui"

import { DocsShell } from "./docs-shell"
import { apiTiers, maintenanceRules, repoSurfaces } from "./docs-data"

function OverviewPage() {
  return (
    <DocsShell>
      <div className="grid gap-10">
        <PageHeader
          actions={
            <>
              <Button asChild variant="outline">
                <a href="/getting-started">Start integration</a>
              </Button>
              <Button asChild>
                <a href="/examples">
                  Open examples
                  <ArrowRightIcon />
                </a>
              </Button>
            </>
          }
          breadcrumb={<Badge variant="outline">v1.0 Stable Contract</Badge>}
          description="Weiyinblue is a monorepo-first UI system built on top of shadcn/ui. The current package surface is frozen for GitHub-ready reuse and documented so future work can stay additive."
          title="Overview"
        />

        <SectionBlock
          description="The repo now behaves like a stable design-system workspace rather than an exploratory component sandbox."
          title="Current system status"
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <Card tone="primary">
              <CardHeader>
                <CardTitle>Package foundation</CardTitle>
                <CardDescription>
                  Root exports, subpath exports, styles entry, and `dist` builds are part of the frozen contract.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>System coverage</CardTitle>
                <CardDescription>
                  Primitives, forms, and reusable blocks cover personal sites, campus products, and dashboard surfaces.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Maintenance focus</CardTitle>
                <CardDescription>
                  Future work should stay narrow: fixes, compatibility, accessibility, and repeated-use additions only.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </SectionBlock>

        <SectionBlock
          action={<Badge variant="subtle">Docs map</Badge>}
          description="Use the docs structure below as the entry point when integrating or extending the system."
          title="Documentation sections"
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                href: "/getting-started",
                title: "Getting Started",
                description: "Install, validate, and consume `@weiyinblue/ui` from a fresh app.",
              },
              {
                href: "/theme",
                title: "Theme",
                description: "Token categories, motion rules, spacing/radius guidance, and state behavior.",
              },
              {
                href: "/primitives",
                title: "Primitives",
                description: "Public component APIs, intended use, and preview examples.",
              },
              {
                href: "/forms",
                title: "Forms",
                description: "Field patterns, section structure, and `react-hook-form` integration.",
              },
              {
                href: "/blocks",
                title: "Blocks",
                description: "Reusable page-level assemblies for navigation, metrics, panels, and workflows.",
              },
              {
                href: "/examples",
                title: "Examples",
                description: "End-to-end pages for portfolio, campus, and admin contexts.",
              },
            ].map((item) => (
              <Card key={item.href}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline">
                    <a href={item.href}>Open</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          description="These are the repo surfaces you should treat as the official ways to use or validate Weiyinblue."
          title="Using this repository"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {repoSurfaces.map((item) => (
              <InfoTile
                key={item.title}
                description={item.description}
                icon={<Layers3Icon className="size-5" />}
                title={item.title}
              />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          action={<Badge variant="subtle">Freeze direction</Badge>}
          description="The package separates stable day-to-day consumer APIs from lower-level compatibility exports and implementation details."
          title="Stability contract"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {apiTiers.map((tier) => (
              <InfoTile
                key={tier.title}
                description={`${tier.description} Examples: ${tier.examples}.`}
                icon={<ShieldCheckIcon className="size-5" />}
                title={tier.title}
              />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          action={<Badge variant="subtle">Maintenance mode</Badge>}
          description="After `v1.0`, the package should change for narrow, durable reasons instead of exploratory expansion."
          title="Change policy"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {maintenanceRules.map((item) => (
              <InfoTile
                key={item.title}
                description={item.text}
                icon={<CheckCircle2Icon className="size-5" />}
                title={item.title}
              />
            ))}
          </div>
        </SectionBlock>
      </div>
    </DocsShell>
  )
}

function InfoTile({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <div className="wyb-glass grid gap-3 rounded-[calc(var(--radius)*1.05)] p-4">
      <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="grid gap-1.5">
        <div className="font-medium text-[var(--text-strong)]">{title}</div>
        <p className="text-sm leading-6 text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

export { OverviewPage }
