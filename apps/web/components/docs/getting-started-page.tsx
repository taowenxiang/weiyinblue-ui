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

import { apiTiers, compatibilityNotes } from "./docs-data"
import { DocsShell } from "./docs-shell"

function GettingStartedPage() {
  return (
    <DocsShell>
      <div className="grid gap-10">
        <PageHeader
          breadcrumb={<Badge variant="outline">Setup</Badge>}
          description="These are the minimum steps required to consume the package, validate the workspace, and contribute safely."
          title="Getting Started"
        />

        <SectionBlock
          description="The workspace is designed so a fresh clone should validate without manual fixes."
          title="Base workflow"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <CommandCard
              code={`pnpm install`}
              description="Install workspace dependencies."
              title="1. Install"
            />
            <CommandCard
              code={`pnpm dev`}
              description="Run the docs/showcase app and any other active workspace dev tasks."
              title="2. Develop"
            />
            <CommandCard
              code={`pnpm lint\npnpm typecheck\npnpm test\npnpm build`}
              description="Core validation path for package and docs changes."
              title="3. Validate"
            />
            <CommandCard
              code={`pnpm test:e2e`}
              description="Run Playwright smoke coverage for docs navigation and critical visual flows."
              title="4. End-to-end"
            />
            <CommandCard
              code={`pnpm --filter consumer-smoke typecheck\npnpm --filter consumer-smoke build`}
              description="Verify the public package surface from a separate workspace consumer instead of relying only on apps/web."
              title="5. External consumer"
            />
          </div>
        </SectionBlock>

        <SectionBlock
          action={<Badge variant="subtle">Public setup</Badge>}
          description="Examples below use only public exports from `@weiyinblue/ui`."
          title="Minimal consumer integration"
        >
          <CodeCard
            code={`import "@weiyinblue/ui/styles.css"`}
            title="Import styles"
          />
          <CodeCard
            code={`import { ThemeProvider } from "@weiyinblue/ui"

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}`}
            title="Mount the provider"
          />
          <CodeCard
            code={`import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@weiyinblue/ui"`}
            title="Use public exports"
          />
        </SectionBlock>

        <SectionBlock
          action={<Badge variant="subtle">Compatibility</Badge>}
          description="These assumptions define the `v1.0` integration baseline for consumers."
          title="Compatibility statement"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {compatibilityNotes.map((item) => (
              <RuleCard
                key={item.title}
                description={item.text}
                title={item.title}
              />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          description="Maintainers should treat every package-facing addition as part of the system contract."
          title="Contribution expectations"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <RuleCard
              description="Every public component or block should have docs, examples, and at least baseline test coverage."
              title="Docs and tests"
            />
            <RuleCard
              description="Interactive components must preserve keyboard behavior, labeling, and visible focus treatments."
              title="Accessibility"
            />
            <RuleCard
              description="Prefer additive public APIs and avoid renaming exports without a strong ergonomics reason."
              title="API stability"
            />
            <RuleCard
              description="Use Changesets for package-facing changes and keep release notes aligned with the stable contract."
              title="Release discipline"
            />
          </div>
        </SectionBlock>

        <SectionBlock
          action={<Badge variant="subtle">Stability</Badge>}
          description="Not every exported symbol should be treated the same way. These tiers define what consumers should depend on confidently."
          title="API stability tiers"
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {apiTiers.map((tier) => (
              <Card key={tier.title}>
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2">
                    <CardTitle>{tier.title}</CardTitle>
                    <Badge variant="outline">{tier.badge}</Badge>
                  </div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">
                  <span className="font-medium text-[var(--text-strong)]">Examples:</span>{" "}
                  {tier.examples}
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          action={<Badge variant="subtle">Extension</Badge>}
          description="Advanced consumers can extend the system safely as long as they stay on the documented side of the contract."
          title="How to extend Weiyinblue safely"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <RuleCard
              description="Build wrappers from documented exports before reaching for internal selectors or DOM assumptions."
              title="Compose first"
            />
            <RuleCard
              description="Use semantic tokens before inventing one-off visual variables or screen-specific CSS treatments."
              title="Prefer semantic tokens"
            />
            <RuleCard
              description="Treat `data-slot`, exact DOM nesting, and exact token values as internal details, not styling contracts."
              title="Avoid internal coupling"
            />
            <RuleCard
              description="If a pattern repeats across real screens, promote it through docs and stable blocks instead of local page CSS."
              title="Promote repeated patterns"
            />
          </div>
        </SectionBlock>
      </div>
    </DocsShell>
  )
}

function CommandCard({
  title,
  description,
  code,
}: {
  title: string
  description: string
  code: string
}) {
  return <CodeCard code={code} description={description} title={title} />
}

function RuleCard({ title, description }: { title: string; description: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

function CodeCard({
  title,
  description,
  code,
}: {
  title: string
  description?: string
  code: string
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent>
        <pre className="overflow-x-auto rounded-[calc(var(--radius)*0.85)] bg-[var(--text-strong)]/95 p-4 text-sm text-white">
          <code>{code}</code>
        </pre>
      </CardContent>
    </Card>
  )
}

export { GettingStartedPage }
