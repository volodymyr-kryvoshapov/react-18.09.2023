import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/todo');
});

test('verify that "Todo" page has correct title', async ({ page }) => {
  const pageTitle = 'Todo List'
  const heading = page.getByRole('heading', { name: pageTitle })

  await expect(heading).toBeVisible();
  await expect(heading).toContainText(pageTitle);
});

test('should display loading spinner', async ({ page }) => {
  const progressbar = page.getByRole('progressbar')

  await expect(progressbar).not.toBeVisible();

  const rows = page.locator('tbody > tr')

  await expect(rows).toHaveCount(10);
});
