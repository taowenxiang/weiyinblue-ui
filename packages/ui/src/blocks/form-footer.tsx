import * as React from "react"

import { cn } from "../lib/utils"

function FormFooter({
  className,
  hint,
  ...props
}: React.ComponentProps<"div"> & {
  hint?: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 border-t border-white/45 pt-4 sm:flex-row sm:items-center sm:justify-between dark:border-white/8",
        className
      )}
      data-slot="form-footer"
      {...props}
    >
      <div className="text-sm text-muted-foreground">{hint}</div>
      <div className="flex flex-wrap items-center gap-2">{props.children}</div>
    </div>
  )
}

export { FormFooter }
