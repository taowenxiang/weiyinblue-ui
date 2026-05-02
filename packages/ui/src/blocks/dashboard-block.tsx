import * as React from "react"
import { ArrowUpRightIcon } from "lucide-react"

import { Badge } from "../components/badge"
import { Button } from "../components/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/card"
import { cn } from "../lib/utils"

function DashboardBlock({
  title,
  description,
  action,
  className,
  children,
}: React.ComponentProps<"section"> & {
  title: string
  description?: string
  action?: React.ReactNode
}) {
  return (
    <Card className={cn("gap-6", className)}>
      <CardHeader className="grid gap-3 md:grid-cols-[1fr_auto] md:items-start">
        <div className="grid gap-2">
          <CardTitle>{title}</CardTitle>
          {description ? <CardDescription>{description}</CardDescription> : null}
        </div>
        {action ? <CardAction>{action}</CardAction> : null}
      </CardHeader>
      <CardContent className="gap-4">{children}</CardContent>
    </Card>
  )
}

function SectionBlock({
  eyebrow,
  title,
  description,
  action,
  className,
  children,
}: React.ComponentProps<"section"> & {
  eyebrow?: string
  title: string
  description?: string
  action?: React.ReactNode
}) {
  return (
    <section className={cn("grid gap-6", className)}>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="grid gap-2">
          {eyebrow ? <Badge variant="subtle">{eyebrow}</Badge> : null}
          <div className="grid gap-2">
            <h2 className="font-heading text-2xl font-semibold text-[var(--text-strong)]">
              {title}
            </h2>
            {description ? (
              <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                {description}
              </p>
            ) : null}
          </div>
        </div>
        {action ? <div>{action}</div> : null}
      </div>
      {children}
    </section>
  )
}

function StatCard({
  label,
  value,
  hint,
  delta,
  icon,
  className,
}: {
  label: string
  value: string
  hint?: string
  delta?: string
  icon?: React.ReactNode
  className?: string
}) {
  return (
    <Card className={cn("gap-4", className)} tone="primary">
      <CardHeader className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
        <div className="grid min-w-0 gap-2">
          <CardDescription className="text-xs tracking-[0.16em] uppercase">
            {label}
          </CardDescription>
          <CardTitle className="min-w-0 text-3xl leading-tight text-balance">
            {value}
          </CardTitle>
        </div>
        {icon ? (
          <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            {icon}
          </div>
        ) : null}
      </CardHeader>
      <CardContent className="flex items-center justify-between gap-3">
        {hint ? <p className="text-sm text-muted-foreground">{hint}</p> : <span />}
        {delta ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
            <ArrowUpRightIcon className="size-3.5" />
            {delta}
          </span>
        ) : null}
      </CardContent>
    </Card>
  )
}

function FilterBar({
  className,
  children,
  actions,
}: React.ComponentProps<"div"> & {
  actions?: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "wyb-glass flex flex-col gap-3 rounded-[calc(var(--radius)*1.05)] p-4 md:flex-row md:items-center md:justify-between",
        className
      )}
    >
      <div className="flex flex-1 flex-wrap items-center gap-3">{children}</div>
      {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
    </div>
  )
}

function EmptyState({
  title,
  description,
  action,
  className,
}: {
  title: string
  description: string
  action?: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "wyb-glass grid place-items-center gap-4 rounded-[calc(var(--radius)*1.1)] px-6 py-12 text-center",
        className
      )}
    >
      <div className="mx-auto grid max-w-md gap-3">
        <h3 className="font-heading text-xl font-semibold text-[var(--text-strong)]">
          {title}
        </h3>
        <p className="text-sm leading-6 text-muted-foreground">{description}</p>
      </div>
      {action ?? <Button variant="subtle">Create first item</Button>}
    </div>
  )
}

export {
  DashboardBlock,
  EmptyState,
  FilterBar,
  SectionBlock,
  StatCard,
}
