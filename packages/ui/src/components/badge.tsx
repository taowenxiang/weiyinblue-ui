import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "../lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit items-center justify-center gap-1 rounded-full border px-2.5 py-1 text-[0.7rem] font-medium tracking-[0.16em] uppercase transition-colors [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[linear-gradient(135deg,var(--brand-start),var(--brand-end))] text-primary-foreground",
        outline: "border-border bg-background/70 text-muted-foreground",
        subtle: "border-transparent bg-primary/10 text-primary",
        ghost: "border-transparent bg-transparent text-muted-foreground",
        destructive: "border-transparent bg-destructive/12 text-destructive",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
