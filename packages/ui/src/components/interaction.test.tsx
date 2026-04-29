import * as React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useForm } from "react-hook-form"

import { Button } from "./button"
import {
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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from ".."

function FormHarness() {
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
                <input aria-label="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button type="submit">Submit</button>
      </form>
    </Form>
  )
}

describe("component interactions", () => {
  it("opens and closes dialog content", async () => {
    const user = userEvent.setup()

    render(
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogDescription>Dialog body</DialogDescription>
        </DialogContent>
      </Dialog>
    )

    await user.click(screen.getByRole("button", { name: /open dialog/i }))
    expect(screen.getByText("Dialog body")).toBeInTheDocument()

    await user.click(screen.getByRole("button", { name: /close dialog/i }))
    await waitFor(() =>
      expect(screen.queryByText("Dialog body")).not.toBeInTheDocument()
    )
  })

  it("opens dropdown menu and selects an item", async () => {
    const user = userEvent.setup()
    const onSelect = vi.fn()

    render(
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Open menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={onSelect}>Profile</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    await user.click(screen.getByRole("button", { name: /open menu/i }))
    await user.click(await screen.findByText("Profile"))

    expect(onSelect).toHaveBeenCalledTimes(1)
  })

  it("switches tabs and exposes the active panel", async () => {
    const user = userEvent.setup()

    render(
      <Tabs defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First</TabsTrigger>
          <TabsTrigger value="second">Second</TabsTrigger>
        </TabsList>
        <TabsContent value="first">First panel</TabsContent>
        <TabsContent value="second">Second panel</TabsContent>
      </Tabs>
    )

    expect(screen.getByText("First panel")).toBeVisible()
    await user.click(screen.getByRole("tab", { name: /second/i }))
    expect(screen.getByText("Second panel")).toBeVisible()
  })

  it("opens select content and applies a value", async () => {
    const user = userEvent.setup()

    render(
      <Select>
        <SelectTrigger aria-label="Track">
          <SelectValue placeholder="Select a track" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="portfolio">Portfolio</SelectItem>
          <SelectItem value="admin">Admin</SelectItem>
        </SelectContent>
      </Select>
    )

    await user.click(screen.getByRole("combobox", { name: /track/i }))
    await user.click(await screen.findByRole("option", { name: /admin/i }))

    expect(screen.getByRole("combobox", { name: /track/i })).toHaveTextContent(
      "Admin"
    )
  })

  it("updates checkbox, radio group, and switch states", async () => {
    const user = userEvent.setup()

    render(
      <div>
        <Checkbox aria-label="Subscribe" />
        <RadioGroup defaultValue="student">
          <RadioGroupItem aria-label="Student" value="student" />
          <RadioGroupItem aria-label="Operator" value="operator" />
        </RadioGroup>
        <Switch aria-label="Notifications" />
      </div>
    )

    const checkbox = screen.getByRole("checkbox", { name: /subscribe/i })
    const operator = screen.getByRole("radio", { name: /operator/i })
    const toggle = screen.getByRole("switch", { name: /notifications/i })

    await user.click(checkbox)
    await user.click(operator)
    await user.click(toggle)

    expect(checkbox).toBeChecked()
    expect(operator).toBeChecked()
    expect(toggle).toHaveAttribute("data-state", "checked")
  })

  it("wires invalid form state and renders the error message", async () => {
    const user = userEvent.setup()

    render(<FormHarness />)

    await user.click(screen.getByRole("button", { name: /submit/i }))

    expect(await screen.findByText("Email is required.")).toBeInTheDocument()
    expect(screen.getByLabelText("Email")).toHaveAttribute("aria-invalid", "true")
  })
})
