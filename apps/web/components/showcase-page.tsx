"use client"

import * as React from "react"
import {
  ArrowRightIcon,
  BarChart3Icon,
  BookOpenTextIcon,
  ChevronRightIcon,
  GlobeIcon,
  Layers3Icon,
  SearchIcon,
  Settings2Icon,
  SparklesIcon,
  Users2Icon,
} from "lucide-react"
import { useForm } from "react-hook-form"

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  DashboardBlock,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  EmptyState,
  FilterBar,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormSection,
  Input,
  Navbar,
  RadioGroup,
  RadioGroupItem,
  SectionBlock,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  StatCard,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
} from "@weiyinblue/ui"

type ShowcaseFormValues = {
  projectName: string
  track: string
  role: string
  bio: string
  subscribe: boolean
}

const navItems = [
  { href: "#tokens", label: "Theme Tokens" },
  { href: "#components", label: "Components" },
  { href: "#blocks", label: "Blocks" },
  { href: "#examples", label: "Examples" },
]

const tokenGroups = [
  {
    name: "Brand Start",
    swatch: "bg-[var(--brand-start)]",
    value: "var(--brand-start)",
  },
  {
    name: "Brand End",
    swatch: "bg-[var(--brand-end)]",
    value: "var(--brand-end)",
  },
  {
    name: "Background",
    swatch: "bg-background",
    value: "var(--background)",
  },
  {
    name: "Surface Glass",
    swatch: "bg-[var(--surface-glass)]",
    value: "var(--surface-glass)",
  },
  {
    name: "Primary",
    swatch: "bg-primary",
    value: "var(--primary)",
  },
  {
    name: "Accent",
    swatch: "bg-accent",
    value: "var(--accent)",
  },
]

function ShowcasePage() {
  const [notifications, setNotifications] = React.useState(true)
  const [submittedProject, setSubmittedProject] = React.useState<string | null>(null)

  const form = useForm<ShowcaseFormValues>({
    defaultValues: {
      projectName: "",
      track: "",
      role: "student",
      bio: "",
      subscribe: true,
    },
  })

  return (
    <div className="relative min-h-svh overflow-hidden">
      <div className="wyb-grid pointer-events-none absolute inset-0 opacity-55" />
      <div className="wyb-orb pointer-events-none absolute top-20 left-8 size-48 opacity-70" />
      <div className="wyb-orb pointer-events-none absolute top-72 right-12 size-64 opacity-70" />

      <Navbar
        brand={
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--brand-start),var(--brand-end))] text-sm font-bold text-primary-foreground shadow-[var(--shadow-brand)]">
              蔚
            </span>
            <div>
              <div className="font-heading text-base font-semibold">蔚殷蓝</div>
              <div className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                Weiyinblue UI
              </div>
            </div>
          </div>
        }
        cta={{ href: "#examples", label: "Open Showcase" }}
        items={navItems}
      />

      <main className="relative">
        <section className="wyb-shell flex min-h-[calc(100svh-4.5rem)] items-center py-16 sm:py-20">
          <div className="grid w-full gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="grid gap-6">
              <Badge className="w-fit" variant="subtle">
                Brand-first shadcn extension
              </Badge>
              <div className="grid gap-4">
                <h1 className="max-w-4xl font-heading text-5xl font-semibold tracking-tight text-[var(--text-strong)] sm:text-6xl lg:text-7xl">
                  为个人网站、校园平台和后台系统准备的一套
                  <span className="wyb-gradient-text">蔚殷蓝 UI 风格包</span>
                </h1>
                <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  Built on top of shadcn/ui, tuned for a clear blue-cyan identity:
                  airy surfaces, academic calm, and reusable primitives that still
                  feel like they belong to the same product family.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href="#components">
                    Browse components
                    <ArrowRightIcon />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#examples">See complete examples</a>
                </Button>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <MetricPill label="Package" value="@weiyinblue/ui" />
                <MetricPill label="Mode" value="Light-first" />
                <MetricPill label="Targets" value="Portfolio / Campus / Admin" />
              </div>
            </div>

            <Card className="relative" tone="primary">
              <CardHeader>
                <CardDescription>Visual character</CardDescription>
                <CardTitle className="text-3xl">Blue mist, glass surfaces, and soft glow.</CardTitle>
              </CardHeader>
              <CardContent className="gap-5">
                <div className="grid gap-3 sm:grid-cols-2">
                  <HighlightTile
                    title="Theme Tokens"
                    description="Semantic colors plus brand extension variables keep the system portable."
                    icon={<Layers3Icon className="size-5" />}
                  />
                  <HighlightTile
                    title="Reusable Blocks"
                    description="Navbar, stats, filter bars, and form sections ship with the same voice."
                    icon={<SparklesIcon className="size-5" />}
                  />
                  <HighlightTile
                    title="Form Ready"
                    description="react-hook-form bindings are built in, so real product surfaces feel natural."
                    icon={<BookOpenTextIcon className="size-5" />}
                  />
                  <HighlightTile
                    title="Docs as Consumer"
                    description="This page uses the package root exports directly instead of private demo helpers."
                    icon={<GlobeIcon className="size-5" />}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="tokens" className="wyb-shell py-18">
          <SectionBlock
            action={<Badge variant="outline">Design Foundation</Badge>}
            description="The palette keeps shadcn semantics, then layers on brand-specific tokens for glow, glass, and typography."
            eyebrow="Theme Tokens"
            title="A token system shaped around the reference mood, not copied layouts"
          >
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {tokenGroups.map((token) => (
                <Card key={token.name} size="sm">
                  <CardContent className="grid gap-4">
                    <div className={`h-24 rounded-[calc(var(--radius)*0.8)] border border-white/60 ${token.swatch}`} />
                    <div className="grid gap-1">
                      <div className="font-medium text-[var(--text-strong)]">{token.name}</div>
                      <div className="font-mono text-xs text-muted-foreground">{token.value}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </SectionBlock>
        </section>

        <section id="components" className="wyb-shell py-18">
          <SectionBlock
            action={<Badge variant="outline">Primitives</Badge>}
            description="Buttons, overlays, navigation helpers, and form controls share one surface language so compositions stay coherent."
            eyebrow="Components"
            title="Core primitives tuned into the Weiyinblue look"
          >
            <Tabs defaultValue="actions">
              <TabsList>
                <TabsTrigger value="actions">Actions</TabsTrigger>
                <TabsTrigger value="forms">Forms</TabsTrigger>
                <TabsTrigger value="overlays">Overlays</TabsTrigger>
              </TabsList>

              <TabsContent value="actions">
                <Card>
                  <CardHeader>
                    <CardTitle>Buttons, badges, and switches</CardTitle>
                    <CardDescription>
                      Fewer variants, but each one has a stronger identity.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-6">
                    <div className="flex flex-wrap gap-3">
                      <Button>Primary CTA</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="subtle">Subtle</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="destructive">Destructive</Button>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="default">Default</Badge>
                      <Badge variant="outline">Outline</Badge>
                      <Badge variant="subtle">Subtle</Badge>
                      <Badge variant="ghost">Ghost</Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-3">
                        <Switch checked={notifications} onCheckedChange={setNotifications} />
                        <span className="text-sm text-muted-foreground">
                          Research update notifications
                        </span>
                      </div>
                      <Separator className="hidden h-6 md:block" orientation="vertical" />
                      <div className="flex items-center gap-3">
                        <Checkbox defaultChecked />
                        <span className="text-sm text-muted-foreground">
                          Include glass surface accents
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="forms">
                <Form {...form}>
                  <form
                    className="grid gap-6"
                    onSubmit={form.handleSubmit((values) => {
                      setSubmittedProject(values.projectName || "Untitled project")
                    })}
                  >
                    <FormSection
                      description="This is the kind of layout the package should make effortless for campus or application flows."
                      footer={
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <p className="text-sm text-muted-foreground">
                            {submittedProject
                              ? `Latest submit: ${submittedProject}`
                              : "No submission yet."}
                          </p>
                          <Button type="submit">Submit mock application</Button>
                        </div>
                      }
                      title="Campus application block"
                    >
                      <div className="grid gap-5 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="projectName"
                          rules={{ required: "Project name is required." }}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Project name</FormLabel>
                              <FormControl>
                                <Input placeholder="蔚殷蓝 Dashboard" {...field} />
                              </FormControl>
                              <FormDescription>Used in navigation and review tables.</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="track"
                          rules={{ required: "Please choose a track." }}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Track</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a track" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="portfolio">Portfolio Site</SelectItem>
                                  <SelectItem value="campus">Campus Platform</SelectItem>
                                  <SelectItem value="admin">Admin Dashboard</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="bio"
                        rules={{ required: "Please add a short design note." }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Design note</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe the tone, audience, or product context..."
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              Keep it brief and focused on visual intent.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid gap-5 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="role"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Audience focus</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  className="grid gap-3"
                                  onValueChange={field.onChange}
                                  value={field.value}
                                >
                                  <label className="wyb-glass flex items-center gap-3 rounded-2xl px-4 py-3">
                                    <RadioGroupItem value="student" />
                                    <span className="text-sm">Students & applicants</span>
                                  </label>
                                  <label className="wyb-glass flex items-center gap-3 rounded-2xl px-4 py-3">
                                    <RadioGroupItem value="creator" />
                                    <span className="text-sm">Personal brand visitors</span>
                                  </label>
                                  <label className="wyb-glass flex items-center gap-3 rounded-2xl px-4 py-3">
                                    <RadioGroupItem value="operator" />
                                    <span className="text-sm">Platform operators</span>
                                  </label>
                                </RadioGroup>
                              </FormControl>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="subscribe"
                          render={({ field }) => (
                            <FormItem className="wyb-glass rounded-[calc(var(--radius)*1.05)] px-4 py-4">
                              <div className="flex items-start justify-between gap-4">
                                <div className="grid gap-2">
                                  <FormLabel>Ship style updates</FormLabel>
                                  <FormDescription>
                                    Send design notes when tokens or blocks evolve.
                                  </FormDescription>
                                </div>
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={(checked) => field.onChange(Boolean(checked))}
                                  />
                                </FormControl>
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                    </FormSection>
                  </form>
                </Form>
              </TabsContent>

              <TabsContent value="overlays">
                <Card>
                  <CardHeader>
                    <CardTitle>Dialogs and menus</CardTitle>
                    <CardDescription>
                      Overlay surfaces keep the same translucent shell as the rest of the system.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Open dialog</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Weiyinblue release note</DialogTitle>
                          <DialogDescription>
                            Dialogs inherit the same airy border, blur, and typography rules as cards.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="wyb-glass rounded-[calc(var(--radius)*0.9)] px-4 py-4 text-sm text-muted-foreground">
                          Ship blocks that feel appropriate for both academic portfolios and product tooling.
                        </div>
                        <DialogFooter showCloseButton>
                          <Button>Save preference</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                          Open menu
                          <ChevronRightIcon />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>Quick actions</DropdownMenuLabel>
                        <DropdownMenuItem>Create component doc</DropdownMenuItem>
                        <DropdownMenuItem>Generate landing page block</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem variant="destructive">
                          Reset preview theme
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </SectionBlock>
        </section>

        <section id="blocks" className="wyb-shell py-18">
          <SectionBlock
            action={<Badge variant="outline">Reusable Layout Blocks</Badge>}
            description="These are the pieces intended to bridge the gap between a raw component library and the real surfaces you keep rebuilding."
            eyebrow="Blocks"
            title="Compositions for dashboards, settings, and content sections"
          >
            <div className="grid gap-4 lg:grid-cols-3">
              <StatCard
                delta="+18%"
                hint="Compared with the last campus launch"
                icon={<BarChart3Icon className="size-5" />}
                label="Reusable coverage"
                value="14 primitives"
              />
              <StatCard
                delta="+6"
                hint="Ready-made shells for product pages"
                icon={<GlobeIcon className="size-5" />}
                label="Reusable blocks"
                value="Navbar + 5"
              />
              <StatCard
                delta="v1"
                hint="Focused scope before data-heavy widgets"
                icon={<Settings2Icon className="size-5" />}
                label="Release target"
                value="Design System Core"
              />
            </div>

            <FilterBar
              actions={
                <>
                  <Button variant="outline">Export</Button>
                  <Button>New block</Button>
                </>
              }
            >
              <div className="relative min-w-56 flex-1">
                <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input className="pl-9" placeholder="Search component or block" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-full md:w-52">
                  <SelectValue placeholder="Choose segment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All surfaces</SelectItem>
                  <SelectItem value="marketing">Personal site</SelectItem>
                  <SelectItem value="campus">Campus platform</SelectItem>
                  <SelectItem value="admin">Admin dashboard</SelectItem>
                </SelectContent>
              </Select>
            </FilterBar>

            <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <DashboardBlock
                action={<Button variant="subtle">Review metrics</Button>}
                description="A single wrapper for section title, description, actions, and content makes admin surfaces much faster to compose."
                title="Engagement overview"
              >
                <div className="grid gap-3 sm:grid-cols-3">
                  <MiniMetric label="Applicants" value="218" />
                  <MiniMetric label="Interviews" value="34" />
                  <MiniMetric label="Offers" value="12" />
                </div>
              </DashboardBlock>
              <EmptyState
                action={<Button variant="subtle">Create first workflow</Button>}
                description="Use this for empty tables, draft systems, or the first launch state of a new internal tool."
                title="No live automation yet"
              />
            </div>
          </SectionBlock>
        </section>

        <section id="examples" className="wyb-shell py-18">
          <SectionBlock
            action={<Badge variant="default">Three Reference Surfaces</Badge>}
            description="The package is meant to scale from a single expressive homepage to calmer operational interfaces without losing its identity."
            eyebrow="Examples"
            title="Complete examples aligned to the projects you want to build next"
          >
            <div className="grid gap-6">
              <Card tone="primary">
                <CardHeader>
                  <CardTitle>1. Personal Website Hero</CardTitle>
                  <CardDescription>
                    A brand-heavy surface for portfolios, research intros, and demos.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="grid gap-4">
                    <Badge variant="subtle" className="w-fit">
                      Research + Design + Systems
                    </Badge>
                    <h3 className="font-heading text-4xl font-semibold text-[var(--text-strong)]">
                      A homepage that feels personal without drifting away from the system.
                    </h3>
                    <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                      Hero sections can stay expressive through stronger typography, brand gradients,
                      and selective glass surfaces while still using the same buttons and cards as the rest of the package.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button>Open portfolio</Button>
                      <Button variant="outline">Read case study</Button>
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <HighlightTile
                      title="Brand typography"
                      description="Space Grotesk gives the system a more authored voice."
                      icon={<SparklesIcon className="size-5" />}
                    />
                    <HighlightTile
                      title="Hero metrics"
                      description="Small stat blocks can sit beside copy without becoming enterprise-heavy."
                      icon={<Users2Icon className="size-5" />}
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <FormSection
                  description="For school platforms, project submissions, or profile settings where clarity matters more than spectacle."
                  footer={
                    <div className="flex flex-wrap gap-3">
                      <Button>Save form</Button>
                      <Button variant="outline">Preview flow</Button>
                    </div>
                  }
                  title="2. Campus Platform Form"
                >
                  <div className="grid gap-4">
                    <Input placeholder="Student project title" />
                    <Textarea placeholder="Write the summary that reviewers will see first..." />
                    <div className="grid gap-3 md:grid-cols-2">
                      <label className="wyb-glass flex items-center gap-3 rounded-2xl px-4 py-3">
                        <Checkbox defaultChecked />
                        <span className="text-sm">Allow mentor feedback</span>
                      </label>
                      <label className="wyb-glass flex items-center gap-3 rounded-2xl px-4 py-3">
                        <Switch defaultChecked />
                        <span className="text-sm">Notify team members</span>
                      </label>
                    </div>
                  </div>
                </FormSection>

                <DashboardBlock
                  action={<Button variant="outline">Open admin view</Button>}
                  description="The same visual language settles down into clearer hierarchy, softer contrast, and denser information spacing."
                  title="3. Admin Dashboard Overview"
                >
                  <div className="grid gap-3 sm:grid-cols-3">
                    <MiniMetric label="Active projects" value="31" />
                    <MiniMetric label="Pending reviews" value="8" />
                    <MiniMetric label="Flagged items" value="2" />
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    <MiniPanel
                      description="Reusable cards and stats give dashboards enough structure before you add tables or charts."
                      title="Information density"
                    />
                    <MiniPanel
                      description="Shared spacing and border logic keeps product interfaces aligned with portfolio pages."
                      title="Cross-product consistency"
                    />
                  </div>
                </DashboardBlock>
              </div>
            </div>
          </SectionBlock>
        </section>
      </main>
    </div>
  )
}

function MetricPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="wyb-glass rounded-[calc(var(--radius)*0.9)] px-4 py-3">
      <div className="text-xs tracking-[0.16em] text-muted-foreground uppercase">{label}</div>
      <div className="mt-1 font-medium text-[var(--text-strong)]">{value}</div>
    </div>
  )
}

function HighlightTile({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="wyb-glass grid gap-3 rounded-[calc(var(--radius)*0.9)] px-4 py-4">
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

function MiniMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="wyb-glass rounded-[calc(var(--radius)*0.9)] px-4 py-4">
      <div className="text-xs tracking-[0.16em] text-muted-foreground uppercase">{label}</div>
      <div className="mt-2 font-heading text-3xl font-semibold text-[var(--text-strong)]">
        {value}
      </div>
    </div>
  )
}

function MiniPanel({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="wyb-glass rounded-[calc(var(--radius)*0.9)] px-4 py-4">
      <div className="font-medium text-[var(--text-strong)]">{title}</div>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
    </div>
  )
}

export { ShowcasePage }
