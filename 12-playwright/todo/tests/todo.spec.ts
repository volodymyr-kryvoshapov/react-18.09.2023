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
  const TODOS = [
    {
      "id": 1,
      "title": "Qui voluptatum.",
      "done": false,
      "description": "Officiis ab maxime quisquam ea animi architecto officia ipsum sint similique doloremque nulla corporis doloremque tenetur soluta."
    },
    {
      "id": 2,
      "title": "Excepturi.",
      "done": false,
      "description": "Vero ipsum eaque odio mollitia tempora quos dicta perspiciatis magnam odio."
    },
    {
      "id": 3,
      "title": "Ut alias.",
      "done": true,
      "description": "Molestias rem aliquid aperiam quisquam minima autem ex fugit magnam sed est ipsa totam distinctio optio dolore eos nesciunt laudantium repellendus minus excepturi iste inventore quae corrupti ullam quia."
    },
  ]

  await page.route('*/**/todos/', async route => {
    await route.fulfill({ json: TODOS });
  });

  const progressbar = page.getByRole('progressbar')

  await expect(progressbar).not.toBeVisible();

  const rows = page.locator('tbody > tr')

  await expect(rows).toHaveCount(3);
});
