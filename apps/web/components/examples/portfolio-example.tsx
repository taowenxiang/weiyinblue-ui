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
  SparklesIcon,
} from "lucide-react"

function PortfolioExample() {
  return (
    <div className="grid gap-10">
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
        breadcrumb={<Badge variant="outline">Portfolio example</Badge>}
        description="This page proves the system can still support a more authored personal-site surface without breaking the same spacing, card, and action language used elsewhere."
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
              The hero uses the same buttons, headings, and surface language as the product examples. The difference comes from composition, not from creating a separate visual system.
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
            hint="Docs pages, templates, and real product contexts"
            icon={<GlobeIcon className="size-5" />}
            label="Surface reuse"
            value="3 contexts"
          />
          <StatCard
            hint="No dedicated marketing component family required"
            icon={<Layers3Icon className="size-5" />}
            label="API policy"
            value="Reuse first"
          />
        </MetricGrid>
      </section>

      <SectionBlock
        action={<Badge variant="subtle">Secondary summary</Badge>}
        description="The secondary section uses the same StatCard rhythm as the admin example, proving that the page can stay expressive without breaking layout discipline."
        title="Why this portfolio pattern exists"
      >
        <MetricGrid className="xl:grid-cols-3">
          <StatCard
            delta="+1"
            hint="Same block language as the dashboard example"
            icon={<SparklesIcon className="size-5" />}
            label="Design system"
            value="Shared blocks"
          />
          <StatCard
            delta="Stable"
            hint="No custom CTA-only primitives required"
            icon={<NotebookPenIcon className="size-5" />}
            label="Authoring mode"
            value="Composition"
          />
          <StatCard
            delta="Low"
            hint="Little ad hoc CSS beyond layout composition"
            icon={<Layers3Icon className="size-5" />}
            label="Maintenance"
            value="Future-safe"
          />
        </MetricGrid>
      </SectionBlock>

      <SectionBlock
        action={<Badge variant="subtle">Featured work</Badge>}
        description="Featured cards should still look like they belong to the same package as the form and dashboard surfaces."
        title="Selected projects"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Weiyinblue docs system",
              description:
                "A real package docs site that validates public exports, examples, and regression coverage together.",
            },
            {
              title: "Campus service portal",
              description:
                "A form-heavy workflow surface that depends on grouped sections, inline guidance, and stable action rows.",
            },
            {
              title: "Review operations dashboard",
              description:
                "An admin shell built from MetricGrid, FilterBar, DataPanel, Table, and explicit empty/loading states.",
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

      <section className="wyb-glass grid gap-5 rounded-[calc(var(--radius)*1.12)] px-6 py-7">
        <div className="grid gap-2">
          <h2 className="font-heading text-2xl font-semibold text-[var(--text-strong)]">
            End with one explicit contact or conversion block
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            The closing CTA should reuse Button and card-like spacing instead of introducing a separate landing-page-only footer system.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button>Start a collaboration</Button>
          <Button variant="outline">Download resume</Button>
        </div>
      </section>
    </div>
  )
}

export { PortfolioExample }
