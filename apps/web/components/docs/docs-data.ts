export const docsNav = [
  { href: "/", label: "Overview" },
  { href: "/getting-started", label: "Getting Started" },
  { href: "/theme", label: "Theme" },
  { href: "/primitives", label: "Primitives" },
  { href: "/forms", label: "Forms" },
  { href: "/blocks", label: "Blocks" },
  { href: "/examples", label: "Examples" },
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
