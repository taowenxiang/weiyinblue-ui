<div align="center">

# 蔚殷蓝

### 一套面向个人网站、Demo、校园平台和后台产品的 UI 系统

[![English README](https://img.shields.io/badge/README-English-2563EB?style=for-the-badge&logo=readme&logoColor=white)](./README.md)
[![UI Package](https://img.shields.io/badge/Package-%40weiyinblue%2Fui-0F172A?style=for-the-badge)](./packages/ui)
[![Next.js](https://img.shields.io/badge/Next.js-16-111827?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-0EA5E9?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![状态](https://img.shields.io/badge/Status-v1.0-blue?style=for-the-badge)](./packages/ui/package.json)

<p align="center">
  <strong>基于 shadcn/ui，提供一套 light-first 的蓝青色 UI 主题。</strong><br>
  这个仓库包含稳定的 <code>@weiyinblue/ui</code> 包、共享主题 token、表单辅助层、可复用布局 block，以及一个同时承担文档和系统契约验证职责的站点。
</p>

[项目概览](#-项目概览) • [能力特征](#-能力特征) • [稳定边界](#-v10-稳定边界) • [快速开始](#-快速开始) • [验证方式](#-验证方式) • [工程结构](#-工程结构)

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
| `文档站` | `apps/web` 同时用于文档展示和真实集成验证。 |

---

## v1.0 稳定边界

`@weiyinblue/ui` 现在按 GitHub 上可公开使用的稳定 `v1.0` 包来维护。

已经冻结的部分：

- 主题入口：`ThemeProvider`、`ThemeToggle`、`styles.css`
- 已文档化的 primitive、form、block 导出
- 当前 3 类目标页面：个人站、校园/设置表单、后台/仪表盘
- 验证门槛：`lint`、`typecheck`、`test`、`build`、`test:e2e`

仍允许增量演进的部分：

- 在真实项目里反复出现、且范围明确的新 block
- React、Next.js、Tailwind、PostCSS 兼容性修复
- 可访问性和回归修复

不属于稳定契约的部分：

- `data-slot` 属性值
- 组件内部的精确 DOM 结构
- 语义 token 背后的精确间距、阴影、渐变数值
- 仅供文档站使用的局部组合辅助代码

像 `cn`、variant helper、部分类型辅助这类 advanced compatibility exports 仍然保留公开，但不作为首选使用入口。

---

## 兼容性说明

- `React 19`
- 文档站使用 `Next.js 16`
- `Tailwind CSS 4`
- 消费方应引入 `@weiyinblue/ui/styles.css`
- `@weiyinblue/ui/postcss.config` 只是 bootstrap 辅助入口，不算核心 UI API

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

## 如何使用这个仓库

这个仓库可以分成 4 个实际职责面：

- `packages/ui`：稳定的 `@weiyinblue/ui` 包
- `apps/web`：官方文档和展示站
- `templates/*`：3 类目标场景的可复制 starter page
- `apps/consumer-smoke`：用于验证公开包导出面的独立消费方

当前目标是 GitHub 上 public-ready，npm 发布刻意延后。

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
- [`docs/API_SURFACE.md`](./docs/API_SURFACE.md)
- [`docs/DECISIONS.md`](./docs/DECISIONS.md)
- [`docs/GOVERNANCE.md`](./docs/GOVERNANCE.md)

外部消费验证路径放在 [`apps/consumer-smoke`](./apps/consumer-smoke)，它通过公开 workspace 依赖消费包，而不是复用文档站内部代码。

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

对 `v1.0` 来说，发版规则是：

- patch：bug、可访问性、回归、兼容性修复
- minor：有重复使用依据的增量导出
- major：明确的 API 清理或契约变更

当前的 GitHub release 草稿放在 [`docs/releases/v1.0.0.md`](./docs/releases/v1.0.0.md)。

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

### 安全扩展建议

- 优先通过已文档化导出做组合。
- 优先复用语义 token，不要先写一次性的 CSS。
- 不要在产品代码里依赖 `data-slot` 选择器，除非你明确接受内部耦合。

---

## 工程结构

```text
weiyinblue/
├─ apps/
│  ├─ consumer-smoke/       # 公开导出面验证消费方
│  └─ web/                  # 展示站和文档站
├─ packages/
│  ├─ ui/                   # @weiyinblue/ui
│  ├─ eslint-config/
│  └─ typescript-config/
├─ templates/               # 可复制的 starter 页面
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

### `apps/consumer-smoke`

用于：

- 从独立消费方视角验证公开包导出面
- 在文档站之外发现导出和集成回归

---

## 当前阶段

当前仓库处于 `v1.0`。

目前已经具备：

- 已冻结并文档化的 theme、primitive、form、block 包导出面
- 一个由包本身驱动的多页面 docs app
- 面向 3 类目标场景的 starter templates
- 一个独立的 consumer-smoke 验证工作区
- CI、单测、视觉/e2e 保护、以及基于 `changesets` 的发版准备
- 面向长期维护的治理和 API surface 文档

`v1.0` 之后，后续演进应该以小范围增量维护为主，而不是继续大规模扩张。

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
- 如果后续有需要，再补公开 npm 发布流程即可，但这不是当前 `v1.0` GitHub-ready 契约的一部分。
