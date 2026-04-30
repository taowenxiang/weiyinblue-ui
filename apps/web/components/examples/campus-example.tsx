"use client"

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
import { useForm } from "react-hook-form"

type CampusFormValues = {
  projectName: string
  advisor: string
  summary: string
  track: string
  visibility: boolean
  notifications: boolean
}

function CampusExample() {
  const form = useForm<CampusFormValues>({
    defaultValues: {
      projectName: "Weiyinblue Campus Dashboard",
      advisor: "Prof. Chen",
      summary: "",
      track: "platform",
      visibility: true,
      notifications: false,
    },
  })

  return (
    <div className="grid gap-10">
      <PageHeader
        actions={
          <>
            <Button variant="outline">Save draft</Button>
            <Button>Submit for review</Button>
          </>
        }
        breadcrumb={<Badge variant="outline">Campus example</Badge>}
        description="This page proves the system can support both application-style forms and calmer settings-style sections without changing the underlying form contract."
        title="Campus application and settings flow"
      />

      <Form {...form}>
        <form className="grid gap-8" onSubmit={form.handleSubmit(() => undefined)}>
          <FormSection
            description="The primary form uses stable section spacing, two-column field rows, inline descriptions, and one consistent action footer."
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
                    <FormDescription>Used in the application queue and student-facing listings.</FormDescription>
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
                    <FormDescription>Academic contact responsible for the submission.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FieldRow>

            <FieldRow>
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
                    <FormDescription>Used to route the project to the right review panel.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="wyb-glass grid gap-3 rounded-[calc(var(--radius)*0.95)] p-4">
                <div className="font-medium text-[var(--text-strong)]">Review expectation</div>
                <p className="text-sm leading-6 text-muted-foreground">
                  Settings-like summary blocks can live beside fields as long as the spacing and surface language stay consistent.
                </p>
              </div>
            </FieldRow>

            <FormField
              control={form.control}
              name="summary"
              rules={{ required: "Summary is required." }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Summary</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the project goal, users, and delivery plan..."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Use this field for scope, audience, and implementation intent.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FormSection>

          <FormSection
            description="This second section is intentionally closer to a settings page so the same primitives can cover lower-pressure editing flows."
            footer={
              <FormFooter hint="Settings are saved per project profile">
                <Button variant="outline">Reset</Button>
                <Button>Save preferences</Button>
              </FormFooter>
            }
            title="Project visibility settings"
          >
            <FieldRow>
              <FormField
                control={form.control}
                name="visibility"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-start justify-between gap-4 rounded-[calc(var(--radius)*0.95)] border border-white/40 bg-background/45 p-4 dark:border-white/8 dark:bg-background/20">
                      <div className="grid gap-1">
                        <FormLabel>Public listing</FormLabel>
                        <FormDescription>
                          Show the project in public showcases once it is approved.
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

              <FormField
                control={form.control}
                name="notifications"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-start justify-between gap-4 rounded-[calc(var(--radius)*0.95)] border border-white/40 bg-background/45 p-4 dark:border-white/8 dark:bg-background/20">
                      <div className="grid gap-1">
                        <FormLabel>Review updates</FormLabel>
                        <FormDescription>
                          Send milestone notifications to the student and advisor.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          aria-label="Review updates"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FieldRow>
          </FormSection>
        </form>
      </Form>
    </div>
  )
}

export { CampusExample }
