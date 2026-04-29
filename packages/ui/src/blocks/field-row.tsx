import * as React from "react"

import { cn } from "../lib/utils"

function FieldRow({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("grid gap-5 md:grid-cols-2", className)}
      data-slot="field-row"
      {...props}
    />
  )
}

export { FieldRow }
