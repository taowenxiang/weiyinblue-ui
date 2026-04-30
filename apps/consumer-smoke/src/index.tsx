import * as React from "react"
import { useForm } from "react-hook-form"

import "@weiyinblue/ui/styles.css"
import {
  Badge,
  Button,
  DataPanel,
  FieldRow,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormFooter,
  FormItem,
  FormLabel,
  FormMessage,
  FormSection,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  ThemeProvider,
} from "@weiyinblue/ui"

type ConsumerFormValues = {
  projectName: string
  advisor: string
}

function ConsumerSmokeApp() {
  const form = useForm<ConsumerFormValues>({
    defaultValues: {
      projectName: "",
      advisor: "",
    },
  })

  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background p-8 text-foreground">
        <div className="mx-auto grid max-w-5xl gap-8">
          <section className="grid gap-3">
            <Badge variant="outline">Consumer smoke</Badge>
            <h1 className="font-heading text-4xl font-semibold text-[var(--text-strong)]">
              External consumer verification
            </h1>
            <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
              This workspace uses only public exports from <code>@weiyinblue/ui</code> to
              verify that a separate consumer can compose theme, forms, data shells, and
              table surfaces without reaching into private app code.
            </p>
          </section>

          <FormSection
            description="Minimal settings-style composition using the public form and block surface."
            footer={
              <FormFooter hint="Smoke path">
                <Button variant="outline">Cancel</Button>
                <Button>Save</Button>
              </FormFooter>
            }
            title="Project settings"
          >
            <Form {...form}>
              <form className="grid gap-4" onSubmit={form.handleSubmit(() => undefined)}>
                <FieldRow>
                  <FormField
                    control={form.control}
                    name="projectName"
                    rules={{ required: "Project name is required." }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project name</FormLabel>
                        <FormControl>
                          <Input placeholder="Weiyinblue Consumer" {...field} />
                        </FormControl>
                        <FormDescription>Used for top-level project headings.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="advisor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Owner</FormLabel>
                        <FormControl>
                          <Input placeholder="Mount" {...field} />
                        </FormControl>
                        <FormDescription>Optional display owner for demos.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </FieldRow>
              </form>
            </Form>
          </FormSection>

          <DataPanel
            action={<Button variant="outline">Review queue</Button>}
            description="Data shells should remain consumable from the public package surface."
            title="Review summary"
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Surface</TableHead>
                  <TableHead>Verification</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>ThemeProvider + styles.css</TableCell>
                  <TableCell>Imported through public entries</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Form primitives</TableCell>
                  <TableCell>Composed without app-local wrappers</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Blocks</TableCell>
                  <TableCell>FormSection, FormFooter, DataPanel, FieldRow</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </DataPanel>
        </div>
      </main>
    </ThemeProvider>
  )
}

export { ConsumerSmokeApp }
