export const docsNav = [
  { href: "/", label: "Overview" },
  { href: "/getting-started", label: "Getting Started" },
  { href: "/theme", label: "Theme" },
  { href: "/primitives", label: "Primitives" },
  { href: "/forms", label: "Forms" },
  { href: "/blocks", label: "Blocks" },
  { href: "/examples", label: "Examples" },
]

export const repoSurfaces = [
  {
    title: "Package",
    description:
      "`packages/ui` is the stable `@weiyinblue/ui` surface for themes, primitives, forms, and blocks.",
  },
  {
    title: "Docs app",
    description:
      "`apps/web` is the canonical docs and showcase site. All examples on it should use public exports only.",
  },
  {
    title: "Starter templates",
    description:
      "`templates/*` contains copy-ready reference pages for portfolio, campus/settings, and admin surfaces.",
  },
  {
    title: "Consumer smoke",
    description:
      "`apps/consumer-smoke` verifies the package from a separate consumer instead of relying on docs-only composition.",
  },
]

export const compatibilityNotes = [
  {
    title: "React",
    text: "Target `React 19` for the stable package contract.",
  },
  {
    title: "Docs app runtime",
    text: "The canonical docs site runs on `Next.js 16`.",
  },
  {
    title: "CSS entry",
    text: "Consumers should import `@weiyinblue/ui/styles.css` as the package CSS baseline.",
  },
  {
    title: "PostCSS bootstrap",
    text: "`@weiyinblue/ui/postcss.config` is available as a setup aid, not as a core UI API.",
  },
]

export const maintenanceRules = [
  {
    title: "Good reasons to change the system",
    text: "Bugs, accessibility issues, compatibility fixes, or repeated high-frequency product patterns.",
  },
  {
    title: "Not enough on their own",
    text: "One-off page styling, novelty-driven visual tweaks, or broad component expansion without repeated evidence.",
  },
  {
    title: "Release policy",
    text: "Patch for fixes, minor for additive repeated-use exports, major only for deliberate contract changes.",
  },
]

export const tokenCategories = [
  {
    name: "Surface",
    items: ["background", "card", "popover", "surface-glass", "surface-tint"],
    note: "Base surfaces, translucent panels, and layered containers.",
  },
  {
    name: "Text",
    items: ["foreground", "text-strong", "text-soft", "muted-foreground"],
    note: "Readable defaults plus stronger and softer text treatments.",
  },
  {
    name: "Brand",
    items: ["brand-start", "brand-end", "primary", "accent"],
    note: "Identity gradients and primary emphasis colors.",
  },
  {
    name: "Feedback",
    items: ["destructive", "ring"],
    note: "Error, invalid, and interaction emphasis states.",
  },
  {
    name: "Structure",
    items: ["border", "input", "sidebar", "radius"],
    note: "Borders, controls, and structural shell settings.",
  },
]

export const stateMatrix = [
  {
    state: "Default",
    guidance: "Use semantic surface and text tokens without custom overrides.",
  },
  {
    state: "Hover",
    guidance: "Prefer accent or subtle brand tint; avoid dramatic color jumps.",
  },
  {
    state: "Focus-visible",
    guidance: "Always expose a visible ring and keep contrast stable in light and dark modes.",
  },
  {
    state: "Active",
    guidance: "Use movement or darker tint sparingly; do not collapse readability.",
  },
  {
    state: "Disabled",
    guidance: "Reduce emphasis through opacity and interaction lock, not by removing structure.",
  },
  {
    state: "Selected",
    guidance: "Use brand tint or active background while retaining readable text.",
  },
  {
    state: "Invalid",
    guidance: "Route through destructive and ring tokens instead of ad hoc reds.",
  },
  {
    state: "Empty / Loading",
    guidance: "Use muted surfaces, skeletons, and explicit empty states before custom placeholders.",
  },
]

export const primitiveDocs = [
  {
    title: "Buttons and badges",
    description: "High-frequency action surfaces with a small, intentional variant set.",
    code: `import { Button, Badge } from "@weiyinblue/ui"`,
  },
  {
    title: "Overlays",
    description: "Dialog, sheet, dropdown menu, tooltip, and toast primitives share one surface language.",
    code: `import { Dialog, Sheet, DropdownMenu, Tooltip, Toast } from "@weiyinblue/ui"`,
  },
  {
    title: "Display primitives",
    description: "Avatar, progress, breadcrumb, skeleton, and table support denser product pages.",
    code: `import { Avatar, Progress, Breadcrumb, Skeleton, Table } from "@weiyinblue/ui"`,
  },
]

export const apiTiers = [
  {
    title: "Stable surface",
    badge: "Recommended",
    description:
      "Use these exports as the long-term `v1.0` contract: theme provider, documented primitives, documented blocks, and form helpers.",
    examples:
      "ThemeProvider, ThemeToggle, Button, Card, Dialog, Form helpers, Navbar, PageHeader, DataPanel",
  },
  {
    title: "Advanced compatibility exports",
    badge: "Use deliberately",
    description:
      "These exports are supported but are intended for composition-heavy consumers and wrappers rather than first-time adopters.",
    examples:
      "cn, buttonVariants, badgeVariants, tabsListVariants, useFormField, NavbarItem, NavbarAction, SideNavItem",
  },
  {
    title: "Non-guaranteed internals",
    badge: "Do not couple",
    description:
      "These are implementation details and may evolve without being treated as public API breaks at `v1.0`.",
    examples:
      "data-slot attributes, exact gradient values, exact shadow recipes, exact spacing numbers behind semantic tokens",
  },
]

export const primitiveReference = [
  {
    title: "Button and Badge",
    intendedUse:
      "Default action surfaces, status chips, and lightweight emphasis in dashboards, forms, and marketing sections.",
    variants:
      "Prefer default, outline, subtle, and ghost. Use destructive only for genuinely destructive actions.",
    composition:
      "Use Button as the action baseline. Pair Badge with section labels, counters, and minor status tags instead of building custom chips.",
    limits:
      "Do not turn Button variants into page-level layout solutions. Avoid adding one-off visual variants for a single product screen.",
  },
  {
    title: "Card family",
    intendedUse:
      "Structured containers for page sections, grouped content, and content blocks with title/description/action affordances.",
    variants:
      "Use tone only when a section needs stronger emphasis. Default cards should remain the most common surface.",
    composition:
      "Compose CardHeader, CardContent, and CardFooter instead of adding product-specific wrappers too early.",
    limits:
      "Do not use cards as a substitute for every page shell. Once a surface needs header, actions, and denser content, prefer DataPanel or SectionBlock.",
  },
  {
    title: "Dialog and Sheet",
    intendedUse:
      "Dialog is for focused confirmation and blocking decisions. Sheet is for secondary workflows and contextual settings.",
    variants:
      "Keep visual customization minimal. Side selection on Sheet is the main supported layout choice.",
    composition:
      "Always include title and description. Use footer actions for explicit completion, cancellation, or save flows.",
    limits:
      "Do not overload dialogs or sheets into full multi-step applications. Escalate to full pages once information density grows.",
  },
  {
    title: "DropdownMenu and Tooltip",
    intendedUse:
      "DropdownMenu handles short action lists or filters. Tooltip handles brief contextual help only.",
    variants:
      "These primitives rely on one consistent surface style rather than variant expansion.",
    composition:
      "Use DropdownMenu for concise actions and Tooltip for short helper text around icon-only or low-context controls.",
    limits:
      "Do not place long-form explanatory content in tooltips. Do not turn dropdown menus into complex forms or settings panels.",
  },
  {
    title: "Input, Textarea, and Label",
    intendedUse:
      "Primary text-entry controls across forms, filters, profile pages, and admin settings.",
    variants:
      "These controls intentionally have one main visual treatment. State changes should come from disabled, focus, and invalid styles.",
    composition:
      "Use with the Form layer for labels, descriptions, messages, and invalid-state wiring rather than manual field scaffolding.",
    limits:
      "Avoid custom field styling per screen. If a workflow needs different field framing, solve that at the block/layout level.",
  },
  {
    title: "Select, Checkbox, RadioGroup, and Switch",
    intendedUse:
      "Structured choice controls for settings, filters, onboarding steps, and form decisions.",
    variants:
      "These controls should stay variant-light. Different choices should be expressed through labels and layout, not visual divergence.",
    composition:
      "Use Select for compact option lists, RadioGroup for explicit mutually exclusive choices, Checkbox for independent toggles, and Switch for binary settings.",
    limits:
      "Do not mix multiple choice metaphors for the same decision. Keep labels and helper text outside the primitive where the Form layer can own semantics.",
  },
  {
    title: "Tabs and Separator",
    intendedUse:
      "Tabs segment closely related views. Separator supports subtle structural rhythm in panels and settings pages.",
    variants:
      "Tabs rely on one stable list treatment and selection state. Separator should remain visually quiet.",
    composition:
      "Use tabs when the user stays in the same information context. Use separators inside sections, forms, and cards to avoid ad hoc borders.",
    limits:
      "Do not use tabs to hide unrelated workflows. If a section has different page-level goals, prefer navigation or separate pages.",
  },
  {
    title: "Avatar, Breadcrumb, and Progress",
    intendedUse:
      "Compact identity, navigation trail, and progress-state primitives for denser product pages.",
    variants:
      "Keep these primitives neutral so they fit both operational and more expressive pages.",
    composition:
      "Use Avatar inside tables, cards, and profile headers. Use Breadcrumb near page headers. Use Progress with supporting text, not as a standalone metric.",
    limits:
      "Do not turn breadcrumb into primary navigation. Do not rely on progress bars without nearby numeric or textual context.",
  },
  {
    title: "Skeleton and Toast",
    intendedUse:
      "Skeleton covers transient loading placeholders. Toast covers lightweight completion and feedback states.",
    variants:
      "Toast intentionally exposes structure through subcomponents instead of multiple visual variants. Skeleton should remain minimal and shape-driven.",
    composition:
      "Use Skeleton to preserve layout during loading. Use ToastProvider, Toast, and ToastViewport as one consistent feedback layer.",
    limits:
      "Do not use toast for critical blocking errors or long-lived notifications. Do not use skeletons where an explicit empty or error state is more honest.",
  },
  {
    title: "Table",
    intendedUse:
      "Structured data display for admin, review, and reporting surfaces with moderate density.",
    variants:
      "Table should stay as a shell and typography system, not a full data grid with many style modes.",
    composition:
      "Pair with DataPanel, EmptyState, Avatar, Progress, and FilterBar for dashboard workflows.",
    limits:
      "Do not grow this into a generic enterprise data grid unless repeated real use proves it is needed.",
  },
  {
    title: "ThemeToggle",
    intendedUse:
      "First-party theme switching for docs and consumer apps that want a ready-made toggle.",
    variants:
      "This component is intentionally narrow and should stay visually aligned with the rest of the control surface.",
    composition:
      "Use it in Navbar, settings headers, or docs-like shells when theme switching is part of the product experience.",
    limits:
      "Do not treat ThemeToggle as a general preference center. If theme preferences become more complex, solve that in product code around the provider.",
  },
]

export const formReference = [
  {
    title: "Form and FormField",
    intendedUse:
      "The default bridge between react-hook-form state and Weiyinblue field composition.",
    composition:
      "Use Form as the provider boundary and FormField for field registration, validation rules, and render-time control wiring.",
    limits:
      "Do not bypass FormField for complex forms unless a third-party field truly cannot fit the pattern.",
  },
  {
    title: "FormItem, FormLabel, and FormControl",
    intendedUse:
      "Consistent field semantics, ids, labels, and invalid-state wiring for text, choice, and custom controls.",
    composition:
      "Wrap each user-facing field in FormItem, place the visible label in FormLabel, and route the actual input through FormControl.",
    limits:
      "Do not manually recreate aria attributes and ids unless you are extending the system in a deliberate advanced case.",
  },
  {
    title: "FormDescription and FormMessage",
    intendedUse:
      "Stable helper and error text placement under each field.",
    composition:
      "Use description for guidance before input and FormMessage for validation or field-specific status after input.",
    limits:
      "Do not move error messaging to ad hoc banners for ordinary field-level validation; keep errors close to the affected control.",
  },
  {
    title: "useFormField",
    intendedUse:
      "Advanced integration helper for custom field wrappers that need access to the current field contract.",
    composition:
      "Use only when building new field primitives or specialized wrappers that must inherit Weiyinblue semantics.",
    limits:
      "This is not the default entry point for application code. Prefer the higher-level form components first.",
  },
]

export const blockReference = [
  {
    title: "Navbar",
    intendedUse:
      "Top-level navigation for docs, personal sites, and product shells with a small set of stable actions.",
    composition:
      "Use for site-wide navigation, theme switching, and compact product actions. Pair with PageHeader for page-level context.",
    limits:
      "Do not overload Navbar with dense settings or workflow-specific controls that belong in side navigation or local page headers.",
  },
  {
    title: "SectionBlock and DashboardBlock",
    intendedUse:
      "SectionBlock is the general docs/content shell. DashboardBlock is the denser operational shell for metrics and structured content.",
    composition:
      "Use SectionBlock when a section needs title, description, and optional action. Use DashboardBlock when dashboard-like density and grouping matter.",
    limits:
      "Do not create many near-identical block wrappers for every section style; reuse these first and extend only when repeated need appears.",
  },
  {
    title: "StatCard and MetricGrid",
    intendedUse:
      "Metric summary surfaces for dashboards, admin overviews, and at-a-glance product snapshots.",
    composition:
      "Use MetricGrid to control rhythm and use StatCard for compact metrics with optional icon, hint, and delta.",
    limits:
      "Do not expand StatCard into a general content card. Once the content becomes narrative or interactive, switch to Card or DataPanel.",
  },
  {
    title: "PageHeader and Breadcrumb-driven headers",
    intendedUse:
      "Page-level entry surfaces for screen titles, descriptions, actions, and orientation.",
    composition:
      "Pair PageHeader with badges, breadcrumbs, filters, or actions instead of inventing page-specific title treatments.",
    limits:
      "Do not bury large custom hero layouts inside PageHeader. Marketing-style hero sections should remain separate patterns.",
  },
  {
    title: "FilterBar and SideNav",
    intendedUse:
      "Compact control rails for filtering, lightweight action clusters, and section-level navigation.",
    composition:
      "Use FilterBar for local filters and quick actions. Use SideNav when users need lateral movement across settings or dashboard sections.",
    limits:
      "Do not turn FilterBar into a full toolbar system. Do not use SideNav for global site navigation that belongs in Navbar.",
  },
  {
    title: "DataPanel and EmptyState",
    intendedUse:
      "DataPanel is the default shell for structured operational content. EmptyState covers zero-data and zero-progress conditions.",
    composition:
      "Use DataPanel with Table, filters, and metrics. Use EmptyState when there is nothing actionable or nothing yet created.",
    limits:
      "Do not mix loading, empty, and error states into one ambiguous placeholder. Choose the state explicitly.",
  },
  {
    title: "FormSection, FieldRow, and FormFooter",
    intendedUse:
      "Stable composition for settings pages, application flows, profile editing, and multi-section forms.",
    composition:
      "Use FormSection to group related decisions, FieldRow for two-column field layouts, and FormFooter for stable actions and status text.",
    limits:
      "Do not rebuild form page spacing ad hoc. If a new workflow needs a different composition pattern, prove it across multiple screens before adding a new block.",
  },
]
