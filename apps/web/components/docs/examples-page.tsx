import {
  Avatar,
  AvatarFallback,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  DataPanel,
  FieldRow,
  FilterBar,
  FormFooter,
  FormSection,
  Input,
  MetricGrid,
  PageHeader,
  Progress,
  SectionBlock,
  Skeleton,
  StatCard,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Textarea,
} from "@weiyinblue/ui"
import { ArrowRightIcon, BarChart3Icon, GlobeIcon, GraduationCapIcon } from "lucide-react"

import { DocsShell } from "./docs-shell"

function ExamplesPage() {
  return (
    <DocsShell progress={74}>
      <div className="grid gap-10">
        <PageHeader
          breadcrumb={<Badge variant="outline">End-to-end references</Badge>}
          description="These examples are intentionally close to real target products: a portfolio landing surface, a campus form flow, and an admin overview."
          title="Examples"
        />

        <SectionBlock
          action={<Badge variant="subtle">Portfolio</Badge>}
          description="Expressive enough for personal sites, but still using the same package surface as the more operational examples."
          title="1. Personal site hero"
        >
          <div className="wyb-glass grid gap-6 rounded-[calc(var(--radius)*1.08)] p-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-4">
              <Badge variant="subtle" className="w-fit">
                Personal brand + system consistency
              </Badge>
              <h2 className="font-heading text-4xl font-semibold tracking-tight text-[var(--text-strong)] sm:text-5xl">
                A reusable landing pattern that still feels authored.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                This example keeps the stronger brand voice for copy, gradients, and framing, while still relying on the same core buttons, cards, and typography scale.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button>
                  Explore case studies
                  <ArrowRightIcon />
                </Button>
                <Button variant="outline">View repository</Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <StatCard
                hint="Public examples and docs pages"
                icon={<GlobeIcon className="size-5" />}
                label="Surfaces"
                value="Landing + docs"
              />
              <StatCard
                hint="One package across multiple contexts"
                icon={<BarChart3Icon className="size-5" />}
                label="Reuse goal"
                value="System-wide"
              />
            </div>
          </div>
        </SectionBlock>

        <SectionBlock
          action={<Badge variant="subtle">Campus</Badge>}
          description="This pattern focuses on clear form hierarchy, predictable spacing, and low-friction completion for student-facing products."
          title="2. Campus application form"
        >
          <FormSection
            description="The form is intentionally calm: clear titles, grouped rows, direct descriptions, and one stable action footer."
            footer={
              <FormFooter hint="Status: draft">
                <Button variant="outline">Save draft</Button>
                <Button>Submit application</Button>
              </FormFooter>
            }
            title="Student project application"
          >
            <FieldRow>
              <div className="grid gap-2">
                <label className="text-sm font-medium text-[var(--text-strong)]">Project name</label>
                <Input placeholder="Weiyinblue Campus Dashboard" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium text-[var(--text-strong)]">Advisor</label>
                <Input placeholder="Prof. Chen" />
              </div>
            </FieldRow>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-[var(--text-strong)]">Summary</label>
              <Textarea placeholder="Describe the project goal, audience, and design approach..." />
            </div>
          </FormSection>
        </SectionBlock>

        <SectionBlock
          action={<Badge variant="subtle">Admin</Badge>}
          description="This example leans into denser information surfaces while keeping the same visual system and token rules."
          title="3. Admin overview dashboard"
        >
          <div className="grid gap-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/examples">Examples</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Admin overview</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <MetricGrid>
              <StatCard
                delta="+12%"
                hint="Compared with last week"
                icon={<GraduationCapIcon className="size-5" />}
                label="Applications"
                value="218"
              />
              <StatCard label="In review" value="34" />
              <StatCard label="Approved" value="12" />
            </MetricGrid>

            <FilterBar actions={<Button>Export report</Button>}>
              <Input className="max-w-64" placeholder="Search applications" />
              <Button variant="ghost">All status</Button>
              <Button variant="ghost">Needs review</Button>
            </FilterBar>

            <DataPanel
              action={<Button variant="outline">Open queue</Button>}
              description="Table, avatar, progress, and loading placeholders are all meant to coexist inside the same system shell."
              title="Review queue"
            >
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Applicant</TableHead>
                    <TableHead>Track</TableHead>
                    <TableHead>Readiness</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>LY</AvatarFallback>
                        </Avatar>
                        <span>Li Yu</span>
                      </div>
                    </TableCell>
                    <TableCell>Campus platform</TableCell>
                    <TableCell>
                      <div className="grid gap-2">
                        <Progress value={82} />
                        <span className="text-xs text-muted-foreground">82%</span>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>QZ</AvatarFallback>
                        </Avatar>
                        <span>Qin Zhao</span>
                      </div>
                    </TableCell>
                    <TableCell>Admin dashboard</TableCell>
                    <TableCell>
                      <div className="grid gap-2">
                        <Progress value={54} />
                        <span className="text-xs text-muted-foreground">54%</span>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="grid gap-3 md:grid-cols-3">
                <Skeleton className="h-20" />
                <Skeleton className="h-20" />
                <Skeleton className="h-20" />
              </div>
            </DataPanel>
          </div>
        </SectionBlock>
      </div>
    </DocsShell>
  )
}

export { ExamplesPage }
