"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { BookOpenTextIcon, SparklesIcon } from "lucide-react"
import {
  Badge,
  Navbar,
  Progress,
  SideNav,
  type NavbarItem,
} from "@weiyinblue/ui"

import { docsNav } from "./docs-data"

function DocsShell({
  children,
  progress = 62,
}: {
  children: React.ReactNode
  progress?: number
}) {
  const pathname = usePathname()

  const navItems: NavbarItem[] = docsNav.map((item) => ({
    href: item.href,
    label: item.label,
  }))

  return (
    <div className="min-h-svh">
      <Navbar
        brand={
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--brand-start),var(--brand-end))] text-sm font-bold text-primary-foreground shadow-[var(--shadow-brand)]">
              蔚
            </span>
            <div>
              <div className="font-heading text-base font-semibold">Weiyinblue</div>
              <div className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                UI Docs
              </div>
            </div>
          </div>
        }
        cta={{ href: "/examples", label: "See examples" }}
        items={navItems}
      />

      <main className="wyb-shell grid gap-8 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 grid gap-4">
            <SideNav
              footer={
                <div className="grid gap-3 rounded-2xl border border-white/40 bg-background/45 p-3 dark:border-white/8 dark:bg-background/20">
                  <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-strong)]">
                    <SparklesIcon className="size-4 text-primary" />
                    v0.2 roadmap
                  </div>
                  <Progress value={progress} />
                  <p className="text-sm leading-6 text-muted-foreground">
                    Docs, tests, CI, and the second component wave are being stabilized together.
                  </p>
                </div>
              }
              items={docsNav.map((item) => ({
                active:
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(`${item.href}/`),
                href: item.href,
                label: item.label,
              }))}
            />
            <div className="wyb-glass grid gap-3 rounded-[calc(var(--radius)*1.05)] p-4">
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-strong)]">
                <BookOpenTextIcon className="size-4 text-primary" />
                Documentation rules
              </div>
              <div className="grid gap-2 text-sm leading-6 text-muted-foreground">
                <p>All code examples on this site use public exports only.</p>
                <Badge className="w-fit" variant="outline">
                  Monorepo-first, external-ready
                </Badge>
              </div>
            </div>
          </div>
        </aside>

        <div className="min-w-0">{children}</div>
      </main>
    </div>
  )
}

export { DocsShell }
