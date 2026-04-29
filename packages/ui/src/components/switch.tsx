"use client"

import * as React from "react"
import { Switch as SwitchPrimitive } from "radix-ui"

import { cn } from "../lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-transparent bg-muted transition-colors outline-none focus-visible:ring-4 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[linear-gradient(135deg,var(--brand-start),var(--brand-end))]",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="pointer-events-none block size-5 rounded-full bg-white shadow-sm ring-0 transition-transform data-[state=checked]:translate-x-[1.25rem] data-[state=unchecked]:translate-x-0"
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
