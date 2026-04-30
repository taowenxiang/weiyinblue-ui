import { AdminExample } from "@/components/examples/admin-example"
import { DocsShell } from "@/components/docs/docs-shell"

export default function AdminExamplePage() {
  return (
    <DocsShell progress={100}>
      <AdminExample />
    </DocsShell>
  )
}
