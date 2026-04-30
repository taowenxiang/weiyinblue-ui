# API Surface

This document defines the `v1.0` contract for `@weiyinblue/ui`.

The goal is to make the package stable enough that consumers can build new pages from the documented surface without depending on internal DOM details or one-off styling hooks.

## Stable surface

These exports form the recommended long-term contract.

### Theme

- `ThemeProvider`
- `ThemeToggle`
- `@weiyinblue/ui/styles.css`

### Primitives

- `Button`
- `Badge`
- `Card` and documented card subcomponents
- `Dialog` and documented dialog subcomponents
- `DropdownMenu` and documented dropdown subcomponents
- `Input`
- `Textarea`
- `Label`
- `Select` and documented select subcomponents
- `Checkbox`
- `RadioGroup`
- `Switch`
- `Separator`
- `Tabs` and documented tabs subcomponents
- `Tooltip` and documented tooltip subcomponents
- `Sheet` and documented sheet subcomponents
- `Skeleton`
- `Toast` and documented toast subcomponents
- `Breadcrumb` and documented breadcrumb subcomponents
- `Avatar` and documented avatar subcomponents
- `Progress`
- `Table` and documented table subcomponents

### Forms

- `Form`
- `FormField`
- `FormItem`
- `FormLabel`
- `FormControl`
- `FormDescription`
- `FormMessage`

### Blocks

- `Navbar`
- `DashboardBlock`
- `SectionBlock`
- `StatCard`
- `FilterBar`
- `EmptyState`
- `FormSection`
- `PageHeader`
- `MetricGrid`
- `DataPanel`
- `SideNav`
- `FieldRow`
- `FormFooter`

Consumers should default to this surface unless they are deliberately extending the design system itself.

## Advanced but supported

These exports are public and supported, but they are not the primary adoption API.

- `cn`
- `buttonVariants`
- `badgeVariants`
- `tabsListVariants`
- `useFormField`
- `NavbarItem`
- `NavbarAction`
- `SideNavItem`
- `@weiyinblue/ui/postcss.config`

Use this tier when you are building wrappers, package-adjacent abstractions, or strongly integrated product shells. Do not treat these as the default entry point for first-time consumers.

## Internal and non-guaranteed

The following are intentionally outside the `v1.0` compatibility promise:

- `data-slot` attribute values
- exact DOM nesting when component semantics stay equivalent
- exact numeric spacing, radius, blur, and shadow values behind semantic tokens
- exact gradient stop values
- any undocumented CSS selector or DOM query contract
- internal docs-app composition helpers under `apps/web`

Consumers should compose through exported React APIs and documented CSS entries rather than coupling to implementation details.

## Stability rules at v1.0

- Prefer additive changes over renames.
- Do not remove stable exports without a future major version and a migration note.
- If an export is awkward but still correct, document the intended usage before considering cleanup.
- If a symbol is public but should not be treated as first-line API, keep it in the advanced tier instead of promoting it silently.

## Compatibility statement

- React: target `React 19`
- Docs app: built with `Next.js 16`
- Consumer CSS assumption: import `@weiyinblue/ui/styles.css`
- Consumer PostCSS assumption: if a consumer wants the same Tailwind/PostCSS wiring as the docs app, it may mirror `@weiyinblue/ui/postcss.config`, but that config is a bootstrap aid rather than a core UI API

## Safe extension guidance

- Prefer composition through stable exports before creating custom wrappers.
- Use semantic tokens before inventing new one-off CSS variables.
- Do not target `data-slot` selectors from product code unless you are knowingly opting into internal coupling.
- If a product need appears in multiple surfaces, promote it through documented blocks or primitives instead of ad hoc page CSS.
