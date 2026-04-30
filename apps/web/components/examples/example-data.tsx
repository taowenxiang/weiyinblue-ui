import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@weiyinblue/ui"

const examplePages = [
  {
    href: "/examples/portfolio",
    label: "Portfolio landing",
    badge: "Portfolio",
    title: "Personal site composition",
    description:
      "Hero, secondary summary, featured work, and a closing CTA section using the same system primitives and blocks.",
  },
  {
    href: "/examples/campus",
    label: "Campus flow",
    badge: "Campus",
    title: "Application and settings form",
    description:
      "Application-style form sections plus a calmer settings-style section using the same form and layout contracts.",
  },
  {
    href: "/examples/admin",
    label: "Admin dashboard",
    badge: "Admin",
    title: "Operational overview surface",
    description:
      "Metrics, filters, data panels, loading state, and empty state under one dashboard rhythm.",
  },
]

const layoutRules = [
  {
    title: "Width and page shell",
    text: "Use one centered content column with a readable max width. Reserve wider layouts for metric grids and admin tables only.",
  },
  {
    title: "Section spacing rhythm",
    text: "Keep major sections on a stable vertical gap. Do not tighten one page and loosen another without a repeated product reason.",
  },
  {
    title: "Page header spacing",
    text: "Start with PageHeader, then place the first interactive surface or section block immediately after it with one consistent gap.",
  },
  {
    title: "Filter and action placement",
    text: "Keep filter and action rows directly above the surface they control. Do not float them independently from their table or panel.",
  },
  {
    title: "Metric and table density",
    text: "MetricGrid handles summary density; DataPanel and Table handle operational density. Do not use freeform cards once structure is needed.",
  },
  {
    title: "Form section structure",
    text: "Use FormSection for grouped decisions, FieldRow for two-column fields, and FormFooter for stable closing actions.",
  },
]

const patternMappings = [
  {
    pattern: "FormSection + FieldRow + FormFooter",
    targets: "Campus applications, settings pages, profile editing",
  },
  {
    pattern: "MetricGrid + FilterBar + DataPanel + Table",
    targets: "Admin overviews, review queues, reporting dashboards",
  },
  {
    pattern: "PageHeader + StatCard + Button",
    targets: "Portfolio intros, product overviews, hero-to-summary transitions",
  },
  {
    pattern: "DataPanel + EmptyState + Skeleton",
    targets: "List-heavy pages that need explicit loading, zero-data, and active-data states",
  },
]

function ExampleIndexCards() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {examplePages.map((item) => (
        <Card key={item.href}>
          <CardHeader className="gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="subtle">{item.badge}</Badge>
              <Badge variant="outline">{item.label}</Badge>
            </div>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline">
              <a href={item.href}>Open page</a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export { ExampleIndexCards, examplePages, layoutRules, patternMappings }
