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
          breadcrumb={<Badge variant="outline">v0.2 Implementation Baseline</Badge>}
          description="Weiyinblue is a monorepo-first UI system built on top of shadcn/ui. The current focus is to make the package stable, testable, externally consumable, and easier to extend without visual drift."
          title="Overview"
        />

        <SectionBlock
          description="The package is already beyond the template stage and now behaves like a real design-system workspace."
          title="Current system status"
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <Card tone="primary">
              <CardHeader>
                <CardTitle>Package foundation</CardTitle>
                <CardDescription>
                  Root exports, subpath exports, styles entry, and `dist` builds are already in place.
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
                <CardTitle>Stability focus</CardTitle>
                <CardDescription>
                  The next stage prioritizes tests, CI, docs structure, and controlled API growth.
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
          description="The repo is now optimized around maintainability, not just one-time visual assembly."
          title="What changed in this roadmap slice"
        >
          <div className="grid gap-4 md:grid-cols-3">
            <InfoTile
              description="CI, changesets, contributor docs, and governance notes reduce future ambiguity."
              icon={<ShieldCheckIcon className="size-5" />}
              title="Repo infrastructure"
            />
            <InfoTile
              description="The next component wave adds sheet, toast, tooltip, skeleton, avatar, progress, table, and breadcrumb."
              icon={<Layers3Icon className="size-5" />}
              title="Component depth"
            />
            <InfoTile
              description="Critical interaction tests start freezing behavior before the surface area grows further."
              icon={<CheckCircle2Icon className="size-5" />}
              title="Regression safety"
            />
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
