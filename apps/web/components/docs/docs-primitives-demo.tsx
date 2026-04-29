"use client"

import * as React from "react"
import { BellIcon, FilterIcon, PanelRightOpenIcon } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Progress,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@weiyinblue/ui"

function DocsPrimitivesDemo() {
  const [toastOpen, setToastOpen] = React.useState(false)

  return (
    <TooltipProvider>
      <ToastProvider swipeDirection="right">
        <div className="grid gap-8">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="wyb-glass grid gap-4 rounded-[calc(var(--radius)*1.05)] p-4">
              <div className="flex flex-wrap items-center gap-3">
                <Button>Primary action</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="subtle">Subtle</Button>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="ghost">
                      <BellIcon />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Notification preferences</TooltipContent>
                </Tooltip>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Open dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Dialog primitive</DialogTitle>
                      <DialogDescription>
                        Dialogs are intended for focused decisions and confirmation flows.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter showCloseButton>
                      <Button>Save</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline">
                      <PanelRightOpenIcon />
                      Open sheet
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Sheet primitive</SheetTitle>
                      <SheetDescription>
                        Use sheets for contextual settings and secondary workflows.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-3">
                      <Select defaultValue="campus">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="portfolio">Portfolio</SelectItem>
                          <SelectItem value="campus">Campus</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <SheetFooter>
                      <Button variant="outline">Cancel</Button>
                      <Button>Apply</Button>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost">
                      <FilterIcon />
                      Menu
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Quick filters</DropdownMenuLabel>
                    <DropdownMenuItem>Light-first surfaces</DropdownMenuItem>
                    <DropdownMenuItem>Form patterns</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Dashboard blocks</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <div className="wyb-glass grid gap-4 rounded-[calc(var(--radius)*1.05)] p-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage alt="Maintainer avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&q=80" />
                  <AvatarFallback>WY</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="font-medium text-[var(--text-strong)]">Maintainer preview</div>
                  <div className="text-sm text-muted-foreground">
                    Avatar, typography, and surface primitives used together.
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Roadmap progress</span>
                  <span className="font-medium text-[var(--text-strong)]">62%</span>
                </div>
                <Progress value={62} />
              </div>
              <div className="grid gap-3">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </div>
          </div>

          <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="wyb-glass grid gap-4 rounded-[calc(var(--radius)*1.05)] p-4">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/examples">Examples</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Admin overview</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <p className="text-sm leading-6 text-muted-foreground">
                Breadcrumb is intentionally small and composable, so it can fit both docs and product pages.
              </p>
              <Button onClick={() => setToastOpen(true)} variant="subtle">
                Show toast
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Component</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Sheet</TableCell>
                  <TableCell>Secondary flow container</TableCell>
                  <TableCell>Ready</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Toast</TableCell>
                  <TableCell>Feedback and completion state</TableCell>
                  <TableCell>Ready</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tooltip</TableCell>
                  <TableCell>Short contextual help</TableCell>
                  <TableCell>Ready</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <Toast onOpenChange={setToastOpen} open={toastOpen}>
          <div className="flex items-start justify-between gap-3">
            <div className="grid gap-1">
              <ToastTitle>Visual smoke verified</ToastTitle>
              <ToastDescription>
                This toast demo is part of the public package surface and the docs consumer.
              </ToastDescription>
            </div>
            <ToastClose />
          </div>
          <ToastAction altText="View examples">View examples</ToastAction>
        </Toast>
        <ToastViewport />
      </ToastProvider>
    </TooltipProvider>
  )
}

export { DocsPrimitivesDemo }
