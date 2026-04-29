import * as React from "react"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/card"
import { cn } from "../lib/utils"

function DataPanel({
  title,
  description,
  action,
  className,
  children,
}: React.ComponentProps<"section"> & {
  title: string
  description?: string
  action?: React.ReactNode
}) {
  return (
    <Card className={cn("gap-5", className)}>
      <CardHeader className="grid gap-3 md:grid-cols-[1fr_auto] md:items-start">
        <div className="grid gap-2">
          <CardTitle>{title}</CardTitle>
          {description ? <CardDescription>{description}</CardDescription> : null}
        </div>
        {action ? <CardAction>{action}</CardAction> : null}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

export { DataPanel }
