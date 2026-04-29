<div align="center">

# Weiyinblue

### A UI system for portfolios, demos, campus platforms, and admin products

[![Chinese README](https://img.shields.io/badge/README-%E4%B8%AD%E6%96%87%E7%89%88-0F172A?style=for-the-badge&logo=readme&logoColor=white)](./README_CN.md)
[![UI Package](https://img.shields.io/badge/Package-%40weiyinblue%2Fui-2563EB?style=for-the-badge)](./packages/ui)
[![Next.js](https://img.shields.io/badge/Next.js-16-111827?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-0EA5E9?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Status](https://img.shields.io/badge/Status-v0.1-1D4ED8?style=for-the-badge)](./packages/ui/package.json)

<p align="center">
  <strong>Built on top of shadcn/ui, with a light-first blue-cyan theme.</strong><br>
  This repository contains the core UI package, shared theme tokens, form helpers, reusable layout blocks, and a showcase app that documents and validates the system.
</p>

[Overview](#-overview) • [Features](#-features) • [Quick Start](#-quick-start) • [Usage](#-usage) • [Architecture](#-architecture)

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
| `Showcase App` | `apps/web` acts as both documentation and an integration target for the package. |

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
```

### 4. Build the workspace

```bash
pnpm build
```

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

---

## Architecture

```text
weiyinblue/
├─ apps/
│  └─ web/                  # showcase and docs app
├─ packages/
│  ├─ ui/                   # @weiyinblue/ui
│  ├─ eslint-config/
│  └─ typescript-config/
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

---

## Current Status

This repository is currently at `v0.1`.

It already includes:

- a working theme baseline
- a core primitive layer
- a form abstraction layer
- a set of reusable layout and product blocks
- a showcase app powered by the package itself

Future work will likely focus on denser product modules, more data-heavy components, and a more formal release strategy.

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

---

## Notes

- `@weiyinblue/ui` is currently consumed as a workspace package inside this monorepo.
- The package already supports `dist` builds and subpath exports.
- Public npm publishing can be added later if needed.
