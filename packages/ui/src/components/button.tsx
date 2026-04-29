import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "../lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl border text-sm font-medium whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:border-primary/30 focus-visible:ring-4 focus-visible:ring-ring active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[linear-gradient(135deg,var(--brand-start),var(--brand-end))] text-primary-foreground shadow-[var(--shadow-brand)] hover:brightness-105",
        outline:
          "border-border bg-background/75 text-foreground backdrop-blur-sm hover:border-primary/30 hover:bg-accent/80",
        subtle:
          "border-transparent bg-primary/12 text-[var(--text-strong)] hover:bg-primary/18 dark:bg-primary/18 dark:hover:bg-primary/24",
        ghost:
          "border-transparent bg-transparent text-muted-foreground hover:bg-accent/80 hover:text-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow-[0_18px_42px_-28px_rgba(220,38,38,0.55)] hover:brightness-105",
        link: "border-transparent px-0 text-primary shadow-none hover:text-brand-end hover:underline",
      },
      size: {
        sm: "h-9 px-3.5 text-sm",
        default: "h-10 px-4",
        lg: "h-11 px-5 text-[0.95rem]",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
