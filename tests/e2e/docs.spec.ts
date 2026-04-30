import { expect, test, type Page } from "@playwright/test"

const pages = [
  { path: "/", heading: "Overview" },
  { path: "/getting-started", heading: "Getting Started" },
  { path: "/theme", heading: "Theme" },
  { path: "/primitives", heading: "Primitives" },
  { path: "/forms", heading: "Forms" },
  { path: "/blocks", heading: "Blocks" },
  { path: "/examples", heading: "Examples" },
  { path: "/examples/portfolio", heading: "Reusable portfolio landing" },
  { path: "/examples/campus", heading: "Campus application and settings flow" },
  { path: "/examples/admin", heading: "Admin overview and review dashboard" },
]

async function gotoDocs(page: Page, path: string) {
  await page.goto(path, { waitUntil: "domcontentloaded" })
}

test("docs pages are reachable from the public site", async ({ page }) => {
  for (const docsPage of pages) {
    await gotoDocs(page, docsPage.path)
    await expect(page.getByRole("heading", { level: 1, name: docsPage.heading })).toBeVisible()
  }
})

test("primitive docs support core interactive demos", async ({ page }) => {
  await gotoDocs(page, "/primitives")

  await page.getByRole("button", { name: "Open dialog" }).click()
  await expect(page.getByText("Dialog primitive")).toBeVisible()
  await page.getByRole("button", { name: "Close dialog" }).click()

  await page.getByRole("button", { name: /open sheet/i }).click()
  await expect(page.getByText("Sheet primitive")).toBeVisible()
  await page.getByRole("button", { name: "Close sheet" }).click()

  await page.getByRole("button", { name: "Show toast" }).click()
  await expect(page.locator('[data-slot="toast-title"]', { hasText: "Visual smoke verified" })).toBeVisible()
})

test("example pages preserve their key pattern surfaces", async ({ page }) => {
  await gotoDocs(page, "/examples/portfolio")
  await expect(page.getByRole("heading", { level: 2, name: "Selected projects" })).toBeVisible()
  await expect(page.getByRole("button", { name: /explore case studies/i })).toBeVisible()

  await gotoDocs(page, "/examples/campus")
  await expect(page.getByRole("heading", { level: 2, name: "Student project application" })).toBeVisible()
  await expect(page.getByLabel("Project name")).toBeVisible()
  await expect(page.getByRole("button", { name: /submit application/i })).toBeVisible()

  await gotoDocs(page, "/examples/admin")
  await expect(
    page.locator('[data-slot="card-title"]', { hasText: "Review queue" })
  ).toBeVisible()
  await expect(page.getByPlaceholder("Search applications")).toBeVisible()
  await expect(page.getByText("No active review queue")).toBeVisible()
})

test("docs visual snapshots stay stable on key surfaces", async ({ page }) => {
  for (const path of [
    "/theme",
    "/examples/portfolio",
    "/examples/campus",
    "/examples/admin",
  ]) {
    await gotoDocs(page, path)
    const snapshotName = path === "/theme" ? "theme" : path.split("/").slice(-1)[0]

    await expect(page).toHaveScreenshot(
      `${snapshotName}.png`,
      {
        animations: "disabled",
        // Fixed-viewport captures are more stable across platforms than
        // full-page screenshots for these long documentation surfaces.
        fullPage: false,
        maxDiffPixelRatio: path === "/theme" ? 0.04 : 0.02,
      }
    )
  }
})
