import * as React from "react"

import { cn } from "../lib/utils"

function Card({
  className,
  size = "default",
  tone = "default",
  ...props
}: React.ComponentProps<"div"> & {
  size?: "default" | "sm"
  tone?: "default" | "muted" | "primary"
}) {
  return (
    <div
      data-slot="card"
      data-size={size}
      data-tone={tone}
      className={cn(
        "group/card wyb-glass flex flex-col gap-5 overflow-hidden rounded-[calc(var(--radius)*1.1)] px-5 py-5 text-sm text-card-foreground shadow-[var(--shadow-card)] data-[size=sm]:gap-4 data-[size=sm]:px-4 data-[size=sm]:py-4 data-[tone=muted]:bg-muted/80 data-[tone=primary]:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--surface-glass)_78%,white),color-mix(in_oklab,var(--brand-start)_8%,white))] dark:data-[tone=primary]:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--surface-glass)_90%,transparent),color-mix(in_oklab,var(--brand-start)_16%,transparent))]",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("grid gap-2", className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("font-heading text-lg font-semibold text-[var(--text-strong)]", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm leading-6 text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn("flex items-center gap-2 self-start justify-self-end", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("grid gap-4", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "-mx-5 -mb-5 flex items-center gap-3 border-t border-white/45 bg-background/45 px-5 py-4 backdrop-blur-sm group-data-[size=sm]/card:-mx-4 group-data-[size=sm]/card:-mb-4 group-data-[size=sm]/card:px-4 dark:border-white/8 dark:bg-background/18",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
}
