import {
  Avatar,
  AvatarFallback,
  Badge,
  Button,
  DataPanel,
  EmptyState,
  FilterBar,
  Input,
  MetricGrid,
  PageHeader,
  Progress,
  Skeleton,
  StatCard,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@weiyinblue/ui"
import {
  BarChart3Icon,
  ClipboardCheckIcon,
  DownloadIcon,
  GraduationCapIcon,
} from "lucide-react"

export function AdminDashboardTemplatePage() {
  return (
    <main className="wyb-shell grid gap-10 py-10">
      <PageHeader
        actions={
          <>
            <Button variant="outline">
              <DownloadIcon />
              Export report
            </Button>
            <Button>Open review queue</Button>
          </>
        }
        breadcrumb={<Badge variant="outline">Admin dashboard template</Badge>}
        description="A copy-ready dashboard page built only from the stable block and primitive surface."
        title="Admin overview and review dashboard"
      />

      <MetricGrid>
        <StatCard
          delta="+12%"
          hint="Compared with last week"
          icon={<GraduationCapIcon className="size-5" />}
          label="Applications"
          value="218"
        />
        <StatCard
          delta="+7"
          hint="Awaiting assignment"
          icon={<ClipboardCheckIcon className="size-5" />}
          label="In review"
          value="34"
        />
        <StatCard
          delta="92%"
          hint="Queue health this week"
          icon={<BarChart3Icon className="size-5" />}
          label="Completion"
          value="92%"
        />
      </MetricGrid>

      <FilterBar actions={<Button>New queue view</Button>}>
        <Input className="max-w-64" placeholder="Search applications" />
        <Button variant="ghost">All status</Button>
        <Button variant="ghost">Needs review</Button>
        <Button variant="ghost">Approved</Button>
      </FilterBar>

      <DataPanel
        action={<Button variant="outline">Open queue</Button>}
        description="The main data shell combines table, avatar, progress, and status composition."
        title="Review queue"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Applicant</TableHead>
              <TableHead>Track</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Readiness</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { initials: "LY", name: "Li Yu", track: "Campus platform", status: "In review", value: 82 },
              { initials: "QZ", name: "Qin Zhao", track: "Admin dashboard", status: "Needs revision", value: 54 },
              { initials: "MH", name: "Ma Hui", track: "Student service", status: "Approved", value: 96 },
            ].map((item) => (
              <TableRow key={item.name}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{item.initials}</AvatarFallback>
                    </Avatar>
                    <span>{item.name}</span>
                  </div>
                </TableCell>
                <TableCell>{item.track}</TableCell>
                <TableCell>
                  <Badge variant={item.status === "Approved" ? "subtle" : "outline"}>
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="grid gap-2">
                    <Progress value={item.value} />
                    <span className="text-xs text-muted-foreground">{item.value}%</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DataPanel>

      <div className="grid gap-6 xl:grid-cols-2">
        <DataPanel
          description="Loading placeholders should keep the same shell density as the resolved view."
          title="Queue loading state"
        >
          <div className="grid gap-3 md:grid-cols-3">
            <Skeleton className="h-20" />
            <Skeleton className="h-20" />
            <Skeleton className="h-20" />
          </div>
          <div className="grid gap-3">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        </DataPanel>

        <EmptyState
          action={<Button variant="subtle">Create review queue</Button>}
          description="Use an explicit empty shell instead of a hand-built placeholder inside the table area."
          title="No active review queue"
        />
      </div>
    </main>
  )
}
