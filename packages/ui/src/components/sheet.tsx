"use client"

import * as React from "react"
import { XIcon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { Dialog as DialogPrimitive } from "radix-ui"

import { Button } from "./button"
import { cn } from "../lib/utils"

function Sheet(props: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger(props: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose(props: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal(props: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-[color-mix(in_oklab,var(--text-strong)_24%,transparent)]/30 backdrop-blur-sm duration-200 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      )}
      data-slot="sheet-overlay"
      {...props}
    />
  )
}

const sheetVariants = cva(
  "wyb-glass fixed z-50 grid gap-5 p-6 shadow-[var(--shadow-brand)] duration-200 outline-none data-open:animate-in data-closed:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-3 top-3 rounded-[calc(var(--radius)*1.1)] data-open:slide-in-from-top-8 data-closed:slide-out-to-top-8",
        bottom:
          "inset-x-3 bottom-3 rounded-[calc(var(--radius)*1.1)] data-open:slide-in-from-bottom-8 data-closed:slide-out-to-bottom-8",
        left: "inset-y-3 left-3 h-auto w-[min(100%-1.5rem,28rem)] rounded-[calc(var(--radius)*1.1)] data-open:slide-in-from-left-8 data-closed:slide-out-to-left-8",
        right:
          "inset-y-3 right-3 h-auto w-[min(100%-1.5rem,28rem)] rounded-[calc(var(--radius)*1.1)] data-open:slide-in-from-right-8 data-closed:slide-out-to-right-8",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

function SheetContent({
  className,
  children,
  side,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> &
  VariantProps<typeof sheetVariants> & {
    showCloseButton?: boolean
  }) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <DialogPrimitive.Content
        className={cn(sheetVariants({ side }), className)}
        data-slot="sheet-content"
        {...props}
      >
        {children}
        {showCloseButton ? (
          <DialogPrimitive.Close asChild>
            <Button
              aria-label="Close sheet"
              className="absolute top-3 right-3"
              size="icon"
              variant="ghost"
            >
              <XIcon />
            </Button>
          </DialogPrimitive.Close>
        ) : null}
      </DialogPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("grid gap-2", className)} data-slot="sheet-header" {...props} />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={cn("font-heading text-xl font-semibold text-[var(--text-strong)]", className)}
      data-slot="sheet-title"
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      className={cn("text-sm leading-6 text-muted-foreground", className)}
      data-slot="sheet-description"
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mt-auto flex flex-col-reverse gap-3 sm:flex-row sm:justify-end", className)}
      data-slot="sheet-footer"
      {...props}
    />
  )
}

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
}
