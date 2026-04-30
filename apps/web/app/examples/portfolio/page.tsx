import { PortfolioExample } from "@/components/examples/portfolio-example"
import { DocsShell } from "@/components/docs/docs-shell"

export default function PortfolioExamplePage() {
  return (
    <DocsShell progress={100}>
      <PortfolioExample />
    </DocsShell>
  )
}
