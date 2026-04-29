import * as React from "react"

import { cn } from "../lib/utils"

function MetricGrid({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("grid gap-4 sm:grid-cols-2 xl:grid-cols-4", className)}
      data-slot="metric-grid"
      {...props}
    />
  )
}

export { MetricGrid }
