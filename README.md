<div align="center">

# Weiyinblue

### A UI system for portfolios, demos, campus platforms, and admin products

[![Chinese README](https://img.shields.io/badge/README-%E4%B8%AD%E6%96%87%E7%89%88-0F172A?style=for-the-badge&logo=readme&logoColor=white)](./README_CN.md)
[![UI Package](https://img.shields.io/badge/Package-%40weiyinblue%2Fui-2563EB?style=for-the-badge)](./packages/ui)
[![Next.js](https://img.shields.io/badge/Next.js-16-111827?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-0EA5E9?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Status](https://img.shields.io/badge/Status-v1.0-blue?style=for-the-badge)](./packages/ui/package.json)

<p align="center">
  <strong>Built on top of shadcn/ui, with a light-first blue-cyan theme.</strong><br>
  This repository contains the stable <code>@weiyinblue/ui</code> package, shared theme tokens, form helpers, reusable layout blocks, and a docs app that validates the system contract.
</p>

[Overview](#-overview) • [Features](#-features) • [Stability](#-stability-at-v10) • [Quick Start](#-quick-start) • [Validation](#-validation) • [Architecture](#-architecture)

</div>

---

## Overview

Weiyinblue is a personal UI system built on top of `shadcn/ui`.

The main goal of this repository is to maintain one consistent component and theme layer that can be reused across:

- portfolio websites
- demos
- campus platforms
- admin systems

Compared with a default shadcn setup, this project adds:

- a custom light-first visual theme
- semantic and brand extension tokens
- a reusable form layer based on `react-hook-form`
- higher-level blocks for common product layouts
- a showcase app that consumes the package directly

---

## Features

| Feature | Description |
| :--- | :--- |
| `Theme Tokens` | Includes semantic tokens such as `background`, `foreground`, `card`, `popover`, `primary`, `secondary`, `muted`, `accent`, `border`, `ring`, `destructive`, and `sidebar`, plus custom tokens like `brand-start`, `brand-end`, and `surface-glass`. |
| `Core Primitives` | Provides a consistent set of styled primitives including `Button`, `Card`, `Dialog`, `Tabs`, `Select`, and `DropdownMenu`. |
| `Form Layer` | Includes `Form`, `FormField`, `FormItem`, `FormControl`, `FormMessage`, and related helpers built around `react-hook-form`. |
| `Reusable Blocks` | Includes `Navbar`, `DashboardBlock`, `StatCard`, `SectionBlock`, `FilterBar`, `EmptyState`, and `FormSection`. |
| `Package Exports` | Supports root imports and subpath imports for components, blocks, providers, and styles. |
| `Docs App` | `apps/web` acts as both documentation and an integration target for the package. |

---

## Stability at v1.0

`@weiyinblue/ui` is now treated as a stable `v1.0` package surface for GitHub-ready consumption.

What is frozen:

- the documented theme entry points: `ThemeProvider`, `ThemeToggle`, `styles.css`
- the documented primitive, form, and block exports
- the current product targets: portfolio, campus/settings, and admin/dashboard surfaces
- the validation gate: `lint`, `typecheck`, `test`, `build`, `test:e2e`

What may still evolve additively:

- narrow new blocks proven across repeated real usage
- compatibility fixes for React, Next.js, Tailwind, and PostCSS
- accessibility improvements and regression fixes

What consumers should not couple to:

- `data-slot` attribute values
- exact DOM nesting
- exact spacing, shadow, and gradient numbers behind semantic tokens
- docs-app-only composition helpers

Advanced compatibility exports such as `cn`, variant helpers, and selected type helpers remain public, but they are not the primary adoption API.

---

## Compatibility

- `React 19`
- `Next.js 16` for the docs app
- `Tailwind CSS 4`
- `PostCSS` consumers should import `@weiyinblue/ui/styles.css`
- `@weiyinblue/ui/postcss.config` is available as a bootstrap aid, not as a core UI API

---

## Package Surface

### Theme

- semantic tokens for application UI
- custom brand extension variables
- light mode and dark mode support

### Primitives

- `Button`
- `Badge`
- `Card`
- `Dialog`
- `Input`
- `Textarea`
- `Label`
- `Select`
- `Checkbox`
- `RadioGroup`
- `Switch`
- `Separator`
- `Tabs`
- `DropdownMenu`
- `Tooltip`
- `Sheet`
- `Skeleton`
- `Toast`
- `Breadcrumb`
- `Avatar`
- `Progress`
- `Table`

### Form

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
- `StatCard`
- `SectionBlock`
- `FilterBar`
- `EmptyState`
- `FormSection`
- `PageHeader`
- `MetricGrid`
- `DataPanel`
- `SideNav`
- `FormFooter`
- `FieldRow`

---

## Quick Start

### 1. Install dependencies

```bash
pnpm install
```

### 2. Run the showcase app

```bash
pnpm dev
```

### 3. Run checks

```bash
pnpm lint
pnpm typecheck
pnpm test
```

### 4. Build the workspace

```bash
pnpm build
```

### 5. Run browser smoke tests

```bash
pnpm test:e2e
```

---

## Using This Repository

The repository is split into four practical surfaces:

- `packages/ui`: the stable `@weiyinblue/ui` package
- `apps/web`: the canonical docs and showcase app
- `templates/*`: copy-ready starter pages for the three target product types
- `apps/consumer-smoke`: a separate consumer used to validate the public package surface

This repo is public-ready on GitHub. npm publishing is intentionally deferred.

---

## Validation

The baseline validation flow for this repository is:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm test:e2e
```

Unit tests use `Vitest + Testing Library`. Browser smoke tests use `Playwright` against the docs app in `apps/web`.

---

## Contributor Workflow

For local development:

```bash
pnpm install
pnpm dev
```

For package and docs verification:

```bash
pnpm check
```

Additional project conventions are documented in:

- [`CONTRIBUTING.md`](./CONTRIBUTING.md)
- [`docs/API_SURFACE.md`](./docs/API_SURFACE.md)
- [`docs/DECISIONS.md`](./docs/DECISIONS.md)
- [`docs/GOVERNANCE.md`](./docs/GOVERNANCE.md)

External-consumer verification lives in [`apps/consumer-smoke`](./apps/consumer-smoke), which consumes the package through the public workspace dependency instead of the docs app.

---

## Release Workflow

This repository now includes a `changesets` setup for versioning and release preparation.

Create a release note:

```bash
pnpm changeset
```

Apply version updates:

```bash
pnpm version-packages
```

The package is still monorepo-first, but the public surface is maintained as external-consumer-ready.

For `v1.0`, release discipline means:

- patch releases for bugs, accessibility, regressions, and compatibility
- minor releases for additive, repeated-use exports
- major releases only for deliberate API cleanup or contract changes

The current GitHub release draft lives in [`docs/releases/v1.0.0.md`](./docs/releases/v1.0.0.md).

---

## Usage

### Import styles

```tsx
import "@weiyinblue/ui/styles.css"
```

### Provide theme context

```tsx
import { ThemeProvider } from "@weiyinblue/ui"

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}
```

### Use components

```tsx
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@weiyinblue/ui"

export function ExampleCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weiyinblue Card</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Primary Action</Button>
      </CardContent>
    </Card>
  )
}
```

### Use blocks

```tsx
import { Navbar, StatCard, FormSection } from "@weiyinblue/ui"
```

### Available exports

```ts
@weiyinblue/ui
@weiyinblue/ui/styles.css
@weiyinblue/ui/components/*
@weiyinblue/ui/providers/*
@weiyinblue/ui/blocks/*
```

### Extend safely

- Prefer composition through documented exports.
- Use semantic tokens before adding one-off CSS.
- Do not target `data-slot` selectors from product code unless you are intentionally opting into internal coupling.

---

## Architecture

```text
weiyinblue/
├─ apps/
│  ├─ consumer-smoke/       # public-surface verification consumer
│  └─ web/                  # docs and showcase app
├─ packages/
│  ├─ ui/                   # @weiyinblue/ui
│  ├─ eslint-config/
│  └─ typescript-config/
├─ templates/               # copy-ready starter pages
├─ turbo.json
└─ pnpm-workspace.yaml
```

### `packages/ui`

Contains:

- theme tokens and global styles
- primitives
- form helpers
- reusable blocks
- package exports and build output

### `apps/web`

Used for:

- documentation
- visual preview
- validating real package consumption

### `apps/consumer-smoke`

Used for:

- validating the public package surface from a separate consumer
- catching export and setup regressions outside the docs app

---

## Current Status

This repository is currently at `v1.0`.

It already includes:

- a frozen documented package surface for theme, primitives, forms, and blocks
- a multi-page docs app powered by the package itself
- starter templates for the three target product types
- a separate consumer-smoke validation workspace
- CI, unit tests, visual/e2e protection, and Changesets-based release prep
- governance and API-surface docs for long-term maintenance

Post-`v1.0`, future work should be additive and narrow rather than exploratory.

---

## Tech Stack

- `React 19`
- `Next.js 16`
- `Tailwind CSS 4`
- `shadcn/ui`
- `Radix UI`
- `react-hook-form`
- `TypeScript`
- `Turbo`
- `pnpm`
- `Vitest`
- `Playwright`

---

## Notes

- `@weiyinblue/ui` is currently consumed as a workspace package inside this monorepo.
- The package supports `dist` builds and subpath exports.
- Public npm publishing can be added later if needed, but it is not required for the `v1.0` GitHub-ready contract.
