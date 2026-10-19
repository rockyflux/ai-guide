import { test, expect } from "@playwright/test";
import { pages, readSource } from "../.vitepress/book.mjs";

test("home, contents, stable deep links and source edit link", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("./");
  await expect(page.getByRole("heading", { name: /AI/ })).toBeVisible();
  await page.getByRole("link", { name: "浏览全书目录" }).click();
  await expect(page.locator(".contents-part")).toHaveCount(5);
  await page
    .locator(".contents-part")
    .filter({ hasText: "编程选型篇" })
    .getByRole("link", { name: /全流程总览/ })
    .first()
    .click();
  await page.reload();
  await expect(page.locator(".vp-doc h1")).toContainText("全流程总览");
  await expect(
    page.getByRole("link", { name: "在 GitHub 上完善本页" }),
  ).toHaveAttribute("href", /\/edit\/main\/programming\//);
  await expect(page.locator(".pager-link.next")).toHaveAttribute(
    "href",
    /programming\/leaderboard.html$/,
  );
  expect(errors).toEqual([]);
});

for (const query of ["全流程", "Skills", "Cursor"]) {
  test(`local search: ${query}`, async ({ page }) => {
    await page.goto("./");
    await page.getByRole("button", { name: "搜索全书" }).click();
    await page.locator("#localsearch-input").fill(query);
    const result = page.locator(".VPLocalSearchBox .result").first();
    await expect(result).toBeVisible();
    await result.click();
    await expect(page.locator(".vp-doc h1")).toBeVisible();
    expect(page.url()).toContain(process.env.SITE_BASE || "/ai-guide/");
  });
}

test("reading controls, image viewer and resume", async ({ page }) => {
  await page.goto("programming/full-pipeline.html");
  await page.getByRole("button", { name: "大号字" }).click();
  await expect(page.locator("html")).toHaveAttribute(
    "data-reading-size",
    "large",
  );
  const heading = page.locator(".vp-doc h2").nth(1);
  await heading.scrollIntoViewIfNeeded();
  await expect
    .poll(() =>
      page.evaluate(
        () => JSON.parse(localStorage.getItem("aiguide:last") || "{}").href,
      ),
    )
    .toContain("#");
  await page.goto("./");
  await expect(page.locator(".continue-reading")).toBeVisible();
  await page.locator(".continue-reading").click();
  await expect(page.locator(".vp-doc h1")).toContainText("全流程总览");
  await expect(page.getByRole("button", { name: "大号字" })).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  const img = page.locator('.vp-doc img[role="button"]').first();
  if (await img.count()) {
    await img.scrollIntoViewIfNeeded();
    await img.click();
    await expect(page.getByRole("dialog", { name: "图片预览" })).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(
      page.getByRole("dialog", { name: "图片预览" }),
    ).not.toBeVisible();
  }
});

test("mobile navigation and readable width", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("./");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.getByRole("link", { name: "开始阅读", exact: false }).click();
  await page.getByRole("button", { name: "全书目录" }).click();
  await expect(page.locator(".VPSidebar")).toBeVisible();
  await page
    .locator(".VPSidebar")
    .getByRole("link", { name: "阅读指南", exact: true })
    .click();
  await expect(page.locator(".vp-doc h1")).toHaveText("阅读指南");
});

test("desktop and dark reading previews", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("./");
  await page.goto("programming/full-pipeline.html");
  await page.getByRole("switch", { name: "切换深色主题" }).click();
  await expect(page.locator("html")).toHaveClass(/dark/);
});

const mermaidPages = pages.filter((p) =>
  /```mermaid/.test(readSource(p.source)),
);

for (const chapter of mermaidPages.slice(0, 5)) {
  test(`render Mermaid: ${chapter.href}`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(chapter.href.slice(1));
    const diagrams = page.locator(".mermaid-diagram");
    const expected = (readSource(chapter.source).match(/```mermaid/g) || [])
      .length;
    await expect(diagrams).toHaveCount(expected);
    for (const diagram of await diagrams.all()) {
      await diagram.scrollIntoViewIfNeeded();
      await expect(diagram).toHaveAttribute("data-rendered", "true");
      await expect(diagram.locator(".diagram-error")).toHaveCount(0);
    }
    expect(errors).toEqual([]);
  });
}
