<div align="center">

# 蔚殷蓝

### 一套面向个人网站、Demo、校园平台和后台产品的 UI 系统

[![English README](https://img.shields.io/badge/README-English-2563EB?style=for-the-badge&logo=readme&logoColor=white)](./README.md)
[![UI Package](https://img.shields.io/badge/Package-%40weiyinblue%2Fui-0F172A?style=for-the-badge)](./packages/ui)
[![Next.js](https://img.shields.io/badge/Next.js-16-111827?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-0EA5E9?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![状态](https://img.shields.io/badge/Status-v0.2-blue?style=for-the-badge)](./packages/ui/package.json)

<p align="center">
  <strong>基于 shadcn/ui，提供一套 light-first 的蓝青色 UI 主题。</strong><br>
  这个仓库包含核心 UI 包、共享主题 token、表单辅助层、可复用布局 block，以及一个同时承担文档和验证职责的展示站。
</p>

[项目概览](#-项目概览) • [能力特征](#-能力特征) • [快速开始](#-快速开始) • [验证方式](#-验证方式) • [发版流程](#-发版流程) • [工程结构](#-工程结构)

</div>

---

## 项目概览

蔚殷蓝是一套建立在 `shadcn/ui` 之上的个人 UI 系统。

这个仓库的主要目标，是维护一套统一的组件和主题层，方便在下面这些场景中复用：

- 个人网站
- Demo
- 校园平台
- 后台系统

相比默认的 shadcn 初始化结果，这个项目主要补充了：

- 一套自定义的 light-first 视觉主题
- 语义 token 和品牌扩展 token
- 基于 `react-hook-form` 的表单层
- 更高层的页面和产品 block
- 一个直接消费包本身的展示站

---

## 能力特征

| 能力 | 说明 |
| :--- | :--- |
| `主题 Token` | 提供 `background`、`foreground`、`card`、`popover`、`primary`、`secondary`、`muted`、`accent`、`border`、`ring`、`destructive`、`sidebar` 等语义 token，以及 `brand-start`、`brand-end`、`surface-glass` 等扩展 token。 |
| `基础组件层` | 提供统一风格的 `Button`、`Card`、`Dialog`、`Tabs`、`Select`、`DropdownMenu` 等基础组件。 |
| `表单层` | 提供基于 `react-hook-form` 的 `Form`、`FormField`、`FormItem`、`FormControl`、`FormMessage` 等封装。 |
| `复用 Block` | 包含 `Navbar`、`DashboardBlock`、`StatCard`、`SectionBlock`、`FilterBar`、`EmptyState`、`FormSection`。 |
| `包导出结构` | 支持根入口导入，以及组件、block、provider、样式的子路径导入。 |
| `展示站` | `apps/web` 同时用于文档展示和真实集成验证。 |

---

## 设计系统范围

### Theme

- 面向应用 UI 的语义 token
- 品牌扩展变量
- 浅色和深色主题支持

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

## 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 启动展示站

```bash
pnpm dev
```

### 3. 运行检查

```bash
pnpm lint
pnpm typecheck
pnpm test
```

### 4. 构建整个工作区

```bash
pnpm build
```

### 5. 运行浏览器烟测

```bash
pnpm test:e2e
```

---

## 验证方式

当前仓库的基础验证链路是：

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm test:e2e
```

组件单测使用 `Vitest + Testing Library`，浏览器交互和截图烟测使用 `Playwright`，目标站点是 `apps/web` 文档站。

---

## 贡献与开发流程

本地开发：

```bash
pnpm install
pnpm dev
```

做一轮完整检查：

```bash
pnpm check
```

进一步的项目约定写在这些文件里：

- [`CONTRIBUTING.md`](./CONTRIBUTING.md)
- [`docs/DECISIONS.md`](./docs/DECISIONS.md)
- [`docs/GOVERNANCE.md`](./docs/GOVERNANCE.md)

---

## 发版流程

仓库已经接入 `changesets`，用于版本和发版准备。

创建一条变更记录：

```bash
pnpm changeset
```

应用版本更新：

```bash
pnpm version-packages
```

目前仍然以 monorepo 内消费为主，但公开导出面已经按外部项目可消费的方式维护。

---

## 使用方式

### 引入样式

```tsx
import "@weiyinblue/ui/styles.css"
```

### 注入主题上下文

```tsx
import { ThemeProvider } from "@weiyinblue/ui"

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}
```

### 使用组件

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

### 使用 Block

```tsx
import { Navbar, StatCard, FormSection } from "@weiyinblue/ui"
```

### 当前导出面

```ts
@weiyinblue/ui
@weiyinblue/ui/styles.css
@weiyinblue/ui/components/*
@weiyinblue/ui/providers/*
@weiyinblue/ui/blocks/*
```

---

## 工程结构

```text
weiyinblue/
├─ apps/
│  └─ web/                  # 展示站和文档站
├─ packages/
│  ├─ ui/                   # @weiyinblue/ui
│  ├─ eslint-config/
│  └─ typescript-config/
├─ turbo.json
└─ pnpm-workspace.yaml
```

### `packages/ui`

包含：

- 主题 token 和全局样式
- 基础组件
- 表单辅助层
- 可复用 block
- 包导出和构建产物

### `apps/web`

用于：

- 文档展示
- 视觉预览
- 验证真实包消费方式

---

## 当前阶段

当前仓库处于 `v0.2`。

目前已经具备：

- 可用的主题基线
- 基础组件层
- 表单抽象层
- 第二波可复用产品 block
- 一个由包本身驱动的多页面文档与展示站
- CI、组件单测和浏览器烟测
- 基于 `changesets` 的发版准备能力

后续更可能补充的是更高信息密度的产品模块、更丰富的数据展示模式，以及长期的 API 治理。

---

## 技术栈

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

## 备注

- `@weiyinblue/ui` 当前以 monorepo workspace 包的形式使用。
- 包已经支持 `dist` 构建和子路径导出。
- 是否发布到 npm 可以后续再决定。
