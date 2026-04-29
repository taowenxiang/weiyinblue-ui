import * as React from "react"

import { cn } from "../lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      className="wyb-glass overflow-hidden rounded-[calc(var(--radius)*1.05)]"
      data-slot="table-shell"
    >
      <div className="overflow-x-auto">
        <table className={cn("w-full caption-bottom text-sm", className)} data-slot="table" {...props} />
      </div>
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return <thead className={cn("[&_tr]:border-b [&_tr]:border-white/35 dark:[&_tr]:border-white/8", className)} data-slot="table-header" {...props} />
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return <tbody className={cn("[&_tr:last-child]:border-0", className)} data-slot="table-body" {...props} />
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return <tfoot className={cn("border-t border-white/45 bg-background/45 font-medium dark:border-white/8 dark:bg-background/20", className)} data-slot="table-footer" {...props} />
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return <tr className={cn("border-b border-white/35 transition-colors hover:bg-accent/40 dark:border-white/8 dark:hover:bg-accent/25", className)} data-slot="table-row" {...props} />
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return <th className={cn("h-12 px-4 text-left align-middle text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase", className)} data-slot="table-head" {...props} />
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return <td className={cn("px-4 py-3 align-middle text-sm", className)} data-slot="table-cell" {...props} />
}

function TableCaption({ className, ...props }: React.ComponentProps<"caption">) {
  return <caption className={cn("mt-4 text-sm text-muted-foreground", className)} data-slot="table-caption" {...props} />
}

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
}
