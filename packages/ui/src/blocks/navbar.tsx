"use client"

import * as React from "react"
import { MenuIcon, XIcon } from "lucide-react"

import { Button } from "../components/button"
import { ThemeToggle } from "../components/theme-toggle"
import { cn } from "../lib/utils"

type NavbarItem = {
  href: string
  label: string
}

type NavbarAction = {
  href: string
  label: string
}

function Navbar({
  brand,
  items,
  cta,
  className,
}: {
  brand: React.ReactNode
  items: NavbarItem[]
  cta?: NavbarAction
  className?: string
}) {
  const [open, setOpen] = React.useState(false)

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-white/50 bg-background/70 backdrop-blur-xl dark:border-white/8 dark:bg-background/45",
        className
      )}
    >
      <div className="wyb-shell">
        <div className="flex min-h-18 items-center justify-between gap-4">
          <div className="font-heading text-base font-semibold text-[var(--text-strong)]">
            {brand}
          </div>
          <nav className="hidden items-center gap-2 md:flex">
            {items.map((item) => (
              <Button key={item.href} asChild variant="ghost">
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            {cta ? (
              <Button asChild>
                <a href={cta.href}>{cta.label}</a>
              </Button>
            ) : null}
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setOpen((value) => !value)}
              size="icon"
              variant="ghost"
            >
              {open ? <XIcon /> : <MenuIcon />}
            </Button>
          </div>
        </div>
        {open ? (
          <div className="grid gap-2 border-t border-white/45 py-4 md:hidden dark:border-white/8">
            {items.map((item) => (
              <Button key={item.href} asChild className="justify-start" variant="ghost">
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </Button>
            ))}
            {cta ? (
              <Button asChild className="mt-1">
                <a href={cta.href} onClick={() => setOpen(false)}>
                  {cta.label}
                </a>
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>
    </header>
  )
}

export { Navbar, type NavbarAction, type NavbarItem }
