"use client"

import * as React from "react"
import { XIcon } from "lucide-react"
import { Toast as ToastPrimitive } from "radix-ui"

import { Button } from "./button"
import { cn } from "../lib/utils"

function ToastProvider({
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Provider>) {
  return <ToastPrimitive.Provider data-slot="toast-provider" {...props} />
}

function ToastViewport({
  className,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Viewport>) {
  return (
    <ToastPrimitive.Viewport
      className={cn(
        "fixed right-4 bottom-4 z-[100] flex max-w-[calc(100vw-2rem)] flex-col gap-3 sm:max-w-sm",
        className
      )}
      data-slot="toast-viewport"
      {...props}
    />
  )
}

function Toast({
  className,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Root>) {
  return (
    <ToastPrimitive.Root
      className={cn(
        "wyb-glass grid gap-3 rounded-[calc(var(--radius)*1.05)] p-4 shadow-[var(--shadow-brand)] data-open:animate-in data-open:slide-in-from-bottom-4 data-closed:animate-out data-closed:fade-out-0",
        className
      )}
      data-slot="toast"
      {...props}
    />
  )
}

function ToastTitle({
  className,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Title>) {
  return (
    <ToastPrimitive.Title
      className={cn("font-medium text-[var(--text-strong)]", className)}
      data-slot="toast-title"
      {...props}
    />
  )
}

function ToastDescription({
  className,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Description>) {
  return (
    <ToastPrimitive.Description
      className={cn("text-sm leading-6 text-muted-foreground", className)}
      data-slot="toast-description"
      {...props}
    />
  )
}

function ToastAction({
  className,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Action>) {
  return (
    <ToastPrimitive.Action
      className={cn(
        "inline-flex items-center justify-center rounded-xl border border-border px-3 py-2 text-sm font-medium transition-colors hover:bg-accent/70",
        className
      )}
      data-slot="toast-action"
      {...props}
    />
  )
}

function ToastClose({
  className,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Close>) {
  return (
    <ToastPrimitive.Close asChild data-slot="toast-close" {...props}>
      <Button aria-label="Close toast" className={className} size="icon" variant="ghost">
        <XIcon />
      </Button>
    </ToastPrimitive.Close>
  )
}

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
}
