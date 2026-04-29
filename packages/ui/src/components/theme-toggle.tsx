"use client"

import * as React from "react"
import { MoonStarIcon, SunMediumIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "./button"

function ThemeToggle({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <Button
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={className}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      size="icon"
      variant="ghost"
      {...props}
    >
      {isDark ? <SunMediumIcon /> : <MoonStarIcon />}
    </Button>
  )
}

export { ThemeToggle }
