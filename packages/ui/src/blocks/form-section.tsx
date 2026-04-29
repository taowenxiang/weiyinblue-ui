import * as React from "react"

import { cn } from "../lib/utils"

function FormSection({
  title,
  description,
  footer,
  className,
  children,
}: React.ComponentProps<"section"> & {
  title: string
  description?: string
  footer?: React.ReactNode
}) {
  return (
    <section
      className={cn(
        "wyb-glass grid gap-6 rounded-[calc(var(--radius)*1.1)] px-5 py-5 shadow-[var(--shadow-card)]",
        className
      )}
    >
      <div className="grid gap-2">
        <h2 className="font-heading text-xl font-semibold text-[var(--text-strong)]">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
      <div className="grid gap-5">{children}</div>
      {footer ? (
        <div className="border-t border-white/45 pt-4 dark:border-white/8">{footer}</div>
      ) : null}
    </section>
  )
}

export { FormSection }
