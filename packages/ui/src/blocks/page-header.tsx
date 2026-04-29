import * as React from "react"

import { Breadcrumb } from "../components/breadcrumb"
import { cn } from "../lib/utils"

function PageHeader({
  title,
  description,
  eyebrow,
  actions,
  breadcrumb,
  className,
}: React.ComponentProps<"header"> & {
  title: string
  description?: string
  eyebrow?: React.ReactNode
  actions?: React.ReactNode
  breadcrumb?: React.ReactNode
}) {
  return (
    <header className={cn("grid gap-4", className)}>
      {breadcrumb ? (
        <div className="min-w-0">
          {React.isValidElement(breadcrumb) ? breadcrumb : <Breadcrumb>{breadcrumb}</Breadcrumb>}
        </div>
      ) : null}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="grid gap-2">
          {eyebrow ? <div>{eyebrow}</div> : null}
          <div className="grid gap-2">
            <h1 className="font-heading text-3xl font-semibold tracking-tight text-[var(--text-strong)] sm:text-4xl">
              {title}
            </h1>
            {description ? (
              <p className="max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                {description}
              </p>
            ) : null}
          </div>
        </div>
        {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
      </div>
    </header>
  )
}

export { PageHeader }
