import * as React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useForm } from "react-hook-form"

import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from ".."

function FormAccessibilityHarness() {
  const form = useForm<{ email: string }>({
    defaultValues: { email: "" },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => undefined)}>
        <FormField
          control={form.control}
          name="email"
          rules={{ required: "Email is required." }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input aria-label="Email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormDescription>Use your active contact address.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <button type="submit">Submit</button>
      </form>
    </Form>
  )
}

describe("accessibility contracts", () => {
  it("keeps visible focus and invalid-state classes on core controls", () => {
    render(
      <div>
        <Button disabled>Disabled action</Button>
        <Input aria-invalid disabled aria-label="Project name" />
        <Textarea aria-invalid disabled aria-label="Project summary" />
        <Checkbox aria-label="Subscribe" disabled />
        <Switch aria-label="Notifications" disabled />
        <Select disabled>
          <SelectTrigger aria-label="Track">
            <SelectValue placeholder="Select a track" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="portfolio">Portfolio</SelectItem>
          </SelectContent>
        </Select>
        <Tabs defaultValue="first">
          <TabsList>
            <TabsTrigger value="first">First</TabsTrigger>
          </TabsList>
          <TabsContent value="first">First panel</TabsContent>
        </Tabs>
      </div>
    )

    const button = screen.getByRole("button", { name: /disabled action/i })
    const input = screen.getByRole("textbox", { name: /project name/i })
    const textarea = screen.getByRole("textbox", { name: /project summary/i })
    const checkbox = screen.getByRole("checkbox", { name: /subscribe/i })
    const toggle = screen.getByRole("switch", { name: /notifications/i })
    const select = screen.getByRole("combobox", { name: /track/i })
    const tab = screen.getByRole("tab", { name: /first/i })

    expect(button.className).toContain("focus-visible:ring-4")
    expect(input.className).toContain("aria-invalid:ring-destructive/18")
    expect(textarea.className).toContain("aria-invalid:ring-destructive/18")
    expect(checkbox.className).toContain("focus-visible:ring-4")
    expect(toggle.className).toContain("focus-visible:ring-4")
    expect(select.className).toContain("focus-visible:ring-4")
    expect(tab.className).toContain("focus-visible:ring-4")

    expect(button).toBeDisabled()
    expect(input).toBeDisabled()
    expect(textarea).toBeDisabled()
    expect(checkbox).toBeDisabled()
    expect(toggle).toBeDisabled()
    expect(select).toBeDisabled()
  })

  it("exposes labeled dialog and sheet surfaces that close with escape", async () => {
    const user = userEvent.setup()

    render(
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Accessibility dialog</DialogTitle>
            <DialogDescription>Dialog body</DialogDescription>
          </DialogContent>
        </Dialog>

        <Sheet>
          <SheetTrigger asChild>
            <Button>Open sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>Accessibility sheet</SheetTitle>
            <SheetDescription>Sheet body</SheetDescription>
          </SheetContent>
        </Sheet>
      </div>
    )

    await user.click(screen.getByRole("button", { name: /open dialog/i }))
    expect(
      screen.getByRole("dialog", { name: /accessibility dialog/i })
    ).toBeInTheDocument()
    await user.keyboard("{Escape}")
    await waitFor(() =>
      expect(
        screen.queryByRole("dialog", { name: /accessibility dialog/i })
      ).not.toBeInTheDocument()
    )

    await user.click(screen.getByRole("button", { name: /open sheet/i }))
    expect(
      screen.getByRole("dialog", { name: /accessibility sheet/i })
    ).toBeInTheDocument()
    await user.keyboard("{Escape}")
    await waitFor(() =>
      expect(
        screen.queryByRole("dialog", { name: /accessibility sheet/i })
      ).not.toBeInTheDocument()
    )
  })

  it("supports keyboard-first menu and tab navigation", async () => {
    const user = userEvent.setup()

    render(
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Open menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Tabs defaultValue="first">
          <TabsList>
            <TabsTrigger value="first">First</TabsTrigger>
            <TabsTrigger value="second">Second</TabsTrigger>
          </TabsList>
          <TabsContent value="first">First panel</TabsContent>
          <TabsContent value="second">Second panel</TabsContent>
        </Tabs>
      </div>
    )

    const menuTrigger = screen.getByRole("button", { name: /open menu/i })
    menuTrigger.focus()
    await user.keyboard("{Enter}")
    expect(await screen.findByRole("menuitem", { name: /profile/i })).toBeInTheDocument()
    await user.keyboard("{Escape}")
    await waitFor(() =>
      expect(screen.queryByRole("menuitem", { name: /profile/i })).not.toBeInTheDocument()
    )

    const firstTab = screen.getByRole("tab", { name: /first/i })
    firstTab.focus()
    await user.keyboard("{ArrowRight}")

    const secondTab = screen.getByRole("tab", { name: /second/i })
    await waitFor(() => {
      expect(secondTab).toHaveFocus()
      expect(secondTab).toHaveAttribute("aria-selected", "true")
    })
  })

  it("supports focus-triggered tooltip semantics", async () => {
    const user = userEvent.setup()

    render(
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button type="button">Context help</button>
          </TooltipTrigger>
          <TooltipContent>Tooltip guidance</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    await user.tab()

    expect(await screen.findByRole("tooltip")).toHaveTextContent("Tooltip guidance")
  })

  it("connects form labels, descriptions, and invalid messages", async () => {
    const user = userEvent.setup()

    render(<FormAccessibilityHarness />)

    const input = screen.getByRole("textbox", { name: /email/i })
    const description = screen.getByText("Use your active contact address.")

    expect(screen.getByText("Email")).toHaveAttribute("for", input.getAttribute("id") ?? "")
    expect(input).toHaveAttribute("aria-describedby", description.getAttribute("id"))

    await user.click(screen.getByRole("button", { name: /submit/i }))

    const message = await screen.findByText("Email is required.")
    expect(input).toHaveAttribute("aria-invalid", "true")
    expect(input.getAttribute("aria-describedby")).toContain(message.getAttribute("id") ?? "")
  })
})
