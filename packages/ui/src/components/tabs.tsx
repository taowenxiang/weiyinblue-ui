"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Tabs as TabsPrimitive } from "radix-ui"

import { cn } from "../lib/utils"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn("group/tabs flex gap-4 data-[orientation=horizontal]:flex-col", className)}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "group/tabs-list inline-flex w-fit items-center gap-1 rounded-2xl border border-white/55 bg-background/78 p-1 text-muted-foreground shadow-[var(--shadow-card)] backdrop-blur-sm dark:border-white/8 dark:bg-background/42",
  {
    variants: {
      variant: {
        default: "",
        line: "rounded-none border-0 bg-transparent p-0 shadow-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-xl border border-transparent px-4 text-sm font-medium text-muted-foreground transition-all outline-none focus-visible:border-primary/25 focus-visible:ring-4 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-active:border-white/55 data-active:bg-[linear-gradient(135deg,color-mix(in_oklab,var(--brand-start)_14%,white),color-mix(in_oklab,var(--brand-end)_12%,white))] data-active:text-[var(--text-strong)] data-active:shadow-[var(--shadow-card)] dark:data-active:border-white/10 dark:data-active:bg-primary/20",
        "group-data-[variant=line]/tabs-list:rounded-none group-data-[variant=line]/tabs-list:border-x-0 group-data-[variant=line]/tabs-list:border-t-0 group-data-[variant=line]/tabs-list:border-b-transparent group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:px-1 group-data-[variant=line]/tabs-list:data-active:border-b-primary group-data-[variant=line]/tabs-list:data-active:bg-transparent group-data-[variant=line]/tabs-list:data-active:shadow-none",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsContent, TabsList, TabsTrigger, tabsListVariants }
