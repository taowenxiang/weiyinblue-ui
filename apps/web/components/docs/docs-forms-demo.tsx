"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import {
  Button,
  Checkbox,
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
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Textarea,
} from "@weiyinblue/ui"

type FormValues = {
  project: string
  audience: string
  notes: string
  visibility: string
  notify: boolean
  archive: boolean
}

function DocsFormsDemo() {
  const [submitted, setSubmitted] = React.useState<string>("No submission yet.")
  const form = useForm<FormValues>({
    defaultValues: {
      project: "",
      audience: "students",
      notes: "",
      visibility: "internal",
      notify: true,
      archive: false,
    },
  })

  return (
    <Form {...form}>
      <form
        className="grid gap-6"
        onSubmit={form.handleSubmit((values) => {
          setSubmitted(`Last submit: ${values.project || "Untitled project"}`)
        })}
      >
        <FormSection
          description="Use sections, field rows, and footer actions to keep forms visually consistent across products."
          footer={
            <FormFooter hint={submitted}>
              <Button variant="outline">Save draft</Button>
              <Button type="submit">Submit</Button>
            </FormFooter>
          }
          title="Project setup pattern"
        >
          <FieldRow>
            <FormField
              control={form.control}
              name="project"
              rules={{ required: "Project name is required." }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project name</FormLabel>
                  <FormControl>
                    <Input placeholder="Weiyinblue Campus Dashboard" {...field} />
                  </FormControl>
                  <FormDescription>Visible in page headers and review lists.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="visibility"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Visibility</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="internal">Internal</SelectItem>
                      <SelectItem value="preview">Preview</SelectItem>
                      <SelectItem value="public">Public</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldRow>

          <FormField
            control={form.control}
            name="notes"
            rules={{ required: "Design notes are required." }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Implementation notes</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe the page intent, user group, and any accessibility constraints..."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This pattern works for application forms, settings, and intake flows.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FieldRow>
            <FormField
              control={form.control}
              name="audience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Audience focus</FormLabel>
                  <FormControl>
                    <RadioGroup className="grid gap-3" onValueChange={field.onChange} value={field.value}>
                      <label className="wyb-glass flex items-center gap-3 rounded-2xl px-4 py-3">
                        <RadioGroupItem value="students" />
                        <span className="text-sm">Students and applicants</span>
                      </label>
                      <label className="wyb-glass flex items-center gap-3 rounded-2xl px-4 py-3">
                        <RadioGroupItem value="operators" />
                        <span className="text-sm">Operators and admins</span>
                      </label>
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="grid gap-3">
              <FormField
                control={form.control}
                name="notify"
                render={({ field }) => (
                  <FormItem className="wyb-glass rounded-[calc(var(--radius)*0.95)] px-4 py-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="grid gap-1">
                        <FormLabel>Notify collaborators</FormLabel>
                        <FormDescription>Useful for review and handoff flows.</FormDescription>
                      </div>
                      <FormControl>
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="archive"
                render={({ field }) => (
                  <FormItem className="wyb-glass rounded-[calc(var(--radius)*0.95)] px-4 py-3">
                    <div className="flex items-center gap-3">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(Boolean(checked))}
                        />
                      </FormControl>
                      <div className="grid gap-1">
                        <FormLabel>Archive after review</FormLabel>
                        <FormDescription>Suitable for draft-heavy internal workflows.</FormDescription>
                      </div>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </FieldRow>
        </FormSection>
      </form>
    </Form>
  )
}

export { DocsFormsDemo }
