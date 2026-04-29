import * as React from "react"

import { cn } from "../lib/utils"

type SideNavItem = {
  href: string
  label: string
  icon?: React.ReactNode
  active?: boolean
  badge?: React.ReactNode
}

function SideNav({
  items,
  footer,
  className,
}: React.ComponentProps<"aside"> & {
  items: SideNavItem[]
  footer?: React.ReactNode
}) {
  return (
    <aside
      className={cn(
        "wyb-glass flex h-full flex-col gap-4 rounded-[calc(var(--radius)*1.05)] p-4",
        className
      )}
    >
      <nav className="grid gap-1" data-slot="side-nav">
        {items.map((item) => (
          <a
            key={`${item.href}-${item.label}`}
            className={cn(
              "flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm transition-colors",
              item.active
                ? "bg-[linear-gradient(135deg,color-mix(in_oklab,var(--brand-start)_16%,white),color-mix(in_oklab,var(--brand-end)_12%,white))] font-medium text-[var(--text-strong)] shadow-[var(--shadow-card)] dark:bg-primary/20"
                : "text-muted-foreground hover:bg-accent/60 hover:text-[var(--text-strong)]"
            )}
            href={item.href}
          >
            {item.icon ? <span className="text-primary">{item.icon}</span> : null}
            <span className="flex-1">{item.label}</span>
            {item.badge ? <span>{item.badge}</span> : null}
          </a>
        ))}
      </nav>
      {footer ? <div className="mt-auto">{footer}</div> : null}
    </aside>
  )
}

export { SideNav, type SideNavItem }
