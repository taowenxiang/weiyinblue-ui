import { expect, test } from "@playwright/test"

const pages = [
  { path: "/", heading: "Overview" },
  { path: "/getting-started", heading: "Getting Started" },
  { path: "/theme", heading: "Theme" },
  { path: "/primitives", heading: "Primitives" },
  { path: "/forms", heading: "Forms" },
  { path: "/blocks", heading: "Blocks" },
  { path: "/examples", heading: "Examples" },
]

test("docs pages are reachable from the public site", async ({ page }) => {
  for (const docsPage of pages) {
    await page.goto(docsPage.path)
    await expect(page.getByRole("heading", { level: 1, name: docsPage.heading })).toBeVisible()
  }
})

test("primitive docs support core interactive demos", async ({ page }) => {
  await page.goto("/primitives")

  await page.getByRole("button", { name: "Open dialog" }).click()
  await expect(page.getByText("Dialog primitive")).toBeVisible()
  await page.getByRole("button", { name: "Close dialog" }).click()

  await page.getByRole("button", { name: /open sheet/i }).click()
  await expect(page.getByText("Sheet primitive")).toBeVisible()
  await page.getByRole("button", { name: "Close sheet" }).click()

  await page.getByRole("button", { name: "Show toast" }).click()
  await expect(page.locator('[data-slot="toast-title"]', { hasText: "Visual smoke verified" })).toBeVisible()
})

test("docs visual smoke captures key surfaces", async ({ page }, testInfo) => {
  for (const path of ["/", "/theme", "/examples"]) {
    await page.goto(path)
    const screenshot = await page.screenshot({ fullPage: true })
    expect(screenshot.byteLength).toBeGreaterThan(10_000)

    await testInfo.attach(`visual-${path === "/" ? "overview" : path.slice(1)}`, {
      body: screenshot,
      contentType: "image/png",
    })
  }
})
