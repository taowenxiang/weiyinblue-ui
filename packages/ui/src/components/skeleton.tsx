import * as React from "react"

import { cn } from "../lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-[calc(var(--radius)*0.8)] bg-[linear-gradient(90deg,color-mix(in_oklab,var(--brand-start)_8%,white),color-mix(in_oklab,var(--brand-end)_14%,white),color-mix(in_oklab,var(--brand-start)_8%,white))] dark:bg-[linear-gradient(90deg,color-mix(in_oklab,var(--brand-start)_22%,transparent),color-mix(in_oklab,var(--brand-end)_20%,transparent),color-mix(in_oklab,var(--brand-start)_22%,transparent))]",
        className
      )}
      data-slot="skeleton"
      {...props}
    />
  )
}

export { Skeleton }
