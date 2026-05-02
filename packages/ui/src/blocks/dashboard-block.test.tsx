import * as React from "react"
import { Layers3Icon } from "lucide-react"
import { render, screen } from "@testing-library/react"

import { StatCard } from "./dashboard-block"

describe("StatCard", () => {
  it("keeps the icon column visible when the value text is wide", () => {
    const { container } = render(
      <StatCard
        hint="No dedicated marketing component family required"
        icon={<Layers3Icon aria-label="API policy icon" className="size-5" />}
        label="API policy"
        value="Reuse first"
      />
    )

    expect(screen.getByText("Reuse first").className).toContain("min-w-0")
    expect(screen.getByText("Reuse first").className).toContain("leading-tight")
    expect(screen.getByLabelText("API policy icon")).toBeInTheDocument()

    const header = container.querySelector('[data-slot="card-header"]')
    expect(header?.className).toContain("grid-cols-[minmax(0,1fr)_auto]")
  })
})
