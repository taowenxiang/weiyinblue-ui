import * as React from "react"

import { cn } from "../lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      data-slot="input"
      type={type}
      className={cn(
        "flex h-11 w-full rounded-2xl border border-border bg-background/72 px-4 py-2 text-sm text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] backdrop-blur-sm transition-all outline-none placeholder:text-muted-foreground focus-visible:border-primary/35 focus-visible:ring-4 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-55 aria-invalid:border-destructive aria-invalid:ring-4 aria-invalid:ring-destructive/18 dark:bg-background/35 dark:shadow-none",
        className
      )}
      {...props}
    />
  )
}

export { Input }
