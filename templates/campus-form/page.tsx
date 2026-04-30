"use client"

import { useForm } from "react-hook-form"

import {
  Badge,
  Button,
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
  PageHeader,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Textarea,
} from "@weiyinblue/ui"

type CampusFormValues = {
  projectName: string
  advisor: string
  summary: string
  track: string
  visibility: boolean
}

export function CampusFormTemplatePage() {
  const form = useForm<CampusFormValues>({
    defaultValues: {
      projectName: "Weiyinblue Campus Dashboard",
      advisor: "Prof. Chen",
      summary: "",
      track: "platform",
      visibility: true,
    },
  })

  return (
    <main className="wyb-shell grid gap-10 py-10">
      <PageHeader
        actions={
          <>
            <Button variant="outline">Save draft</Button>
            <Button>Submit for review</Button>
          </>
        }
        breadcrumb={<Badge variant="outline">Campus form template</Badge>}
        description="A copy-ready form page built from the stable Weiyinblue form and block surface."
        title="Campus application and settings flow"
      />

      <Form {...form}>
        <form className="grid gap-8" onSubmit={form.handleSubmit(() => undefined)}>
          <FormSection
            description="Primary application section with grouped fields, inline guidance, and stable completion actions."
            footer={
              <FormFooter hint="Status: draft">
                <Button variant="outline">Save draft</Button>
                <Button>Submit application</Button>
              </FormFooter>
            }
            title="Student project application"
          >
            <FieldRow>
              <FormField
                control={form.control}
                name="projectName"
                rules={{ required: "Project name is required." }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project name</FormLabel>
                    <FormControl>
                      <Input placeholder="Weiyinblue Campus Dashboard" {...field} />
                    </FormControl>
                    <FormDescription>Used in the queue and public listing.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="advisor"
                rules={{ required: "Advisor is required." }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Advisor</FormLabel>
                    <FormControl>
                      <Input placeholder="Prof. Chen" {...field} />
                    </FormControl>
                    <FormDescription>Primary academic contact for the submission.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FieldRow>

            <FormField
              control={form.control}
              name="track"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Track</FormLabel>
                  <FormControl>
                    <Select defaultValue={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="platform">Campus platform</SelectItem>
                        <SelectItem value="service">Student service</SelectItem>
                        <SelectItem value="admin">Admin tool</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>Routes the project to the correct review stream.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="summary"
              rules={{ required: "Summary is required." }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Summary</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe the project goal and audience..." {...field} />
                  </FormControl>
                  <FormDescription>Use this field for scope, users, and delivery intent.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FormSection>

          <FormSection
            description="Settings-style section that reuses the same shell without becoming a separate layout system."
            footer={
              <FormFooter hint="Settings are saved per project profile">
                <Button variant="outline">Reset</Button>
                <Button>Save preferences</Button>
              </FormFooter>
            }
            title="Project visibility settings"
          >
            <FormField
              control={form.control}
              name="visibility"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-start justify-between gap-4 rounded-[calc(var(--radius)*0.95)] border border-white/40 bg-background/45 p-4 dark:border-white/8 dark:bg-background/20">
                    <div className="grid gap-1">
                      <FormLabel>Public listing</FormLabel>
                      <FormDescription>
                        Show the project in public showcases after approval.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        aria-label="Public listing"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FormSection>
        </form>
      </Form>
    </main>
  )
}
