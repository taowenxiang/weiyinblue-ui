import {
  Badge,
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  MetricGrid,
  PageHeader,
  SectionBlock,
  StatCard,
} from "@weiyinblue/ui"
import {
  ArrowRightIcon,
  GlobeIcon,
  Layers3Icon,
  NotebookPenIcon,
} from "lucide-react"

export function PortfolioTemplatePage() {
  return (
    <main className="wyb-shell grid gap-10 py-10">
      <PageHeader
        actions={
          <>
            <Button variant="outline">Read notes</Button>
            <Button>
              View selected work
              <ArrowRightIcon />
            </Button>
          </>
        }
        breadcrumb={<Badge variant="outline">Portfolio template</Badge>}
        description="A copy-ready landing page pattern built only from public Weiyinblue exports."
        title="Reusable portfolio landing"
      />

      <section className="wyb-glass grid gap-8 rounded-[calc(var(--radius)*1.12)] px-6 py-7 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-5">
          <Badge className="w-fit" variant="subtle">
            Personal brand + system consistency
          </Badge>
          <div className="grid gap-4">
            <h2 className="font-heading text-4xl font-semibold tracking-tight text-[var(--text-strong)] sm:text-5xl">
              A landing page pattern that still feels authored instead of generic.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground">
              The hero uses the same buttons, headings, and surface language as more operational product pages.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button>
              Explore case studies
              <ArrowRightIcon />
            </Button>
            <Button variant="outline">Open repository</Button>
          </div>
        </div>

        <MetricGrid className="sm:grid-cols-2 xl:grid-cols-2">
          <StatCard
            hint="One package across different contexts"
            icon={<GlobeIcon className="size-5" />}
            label="Surface reuse"
            value="3 contexts"
          />
          <StatCard
            hint="No landing-page-only primitives required"
            icon={<Layers3Icon className="size-5" />}
            label="API policy"
            value="Reuse first"
          />
        </MetricGrid>
      </section>

      <SectionBlock
        action={<Badge variant="subtle">Featured work</Badge>}
        description="Featured cards should still look like part of the same system as the rest of the package."
        title="Selected projects"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Weiyinblue docs system",
              description: "A package docs site that validates public exports, examples, and regression coverage together.",
            },
            {
              title: "Campus service portal",
              description: "A form-heavy workflow surface built from grouped sections and stable action rows.",
            },
            {
              title: "Review operations dashboard",
              description: "An admin shell composed from MetricGrid, FilterBar, DataPanel, and Table.",
            },
          ].map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost">Read case study</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        action={<Badge variant="subtle">Secondary summary</Badge>}
        description="The secondary section reuses the same metric language as denser product pages."
        title="Why this pattern works"
      >
        <MetricGrid className="xl:grid-cols-3">
          <StatCard
            delta="+1"
            hint="Same block language as operational pages"
            icon={<NotebookPenIcon className="size-5" />}
            label="Composition"
            value="Shared system"
          />
          <StatCard label="Maintenance" value="Low" />
          <StatCard label="Future safety" value="Stable blocks" />
        </MetricGrid>
      </SectionBlock>
    </main>
  )
}
