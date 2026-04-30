import { CampusExample } from "@/components/examples/campus-example"
import { DocsShell } from "@/components/docs/docs-shell"

export default function CampusExamplePage() {
  return (
    <DocsShell progress={100}>
      <CampusExample />
    </DocsShell>
  )
}
