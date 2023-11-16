import { test, expect } from '@playwright/test';

test('Home page should contain title', async ({ page }) => {
  await page.goto('https://www.plus.fifa.com/en/');

  await expect(page).toHaveTitle('FIFA+');
});

test('Verify the logo is visible and has alt title', async ({ page }) => {
  await page.goto('https://www.plus.fifa.com/en/');

  const logo = page.locator('#chili-logo');
  await expect(logo).toBeVisible();
  await expect(logo).toHaveAttribute('alt', 'Just Chilling');
});

test('Verify navigation links are visible and have correct text', async ({ page }) => {
  const expectedLinks = [
    "HOME",
    "FIFA U-17 WORLD CUP 2023™",
    "LIVE",
    "ORIGINALS",
    "ARCHIVE",
  ];

  await page.goto('https://www.plus.fifa.com/en/');

  await page.pause();

  const navLinks = page.locator('nav a[data-id]:not([data-testid])');

  // await page.waitForTimeout(1000);
  // expect(await navLinks.allInnerTexts()).toEqual(expectedLinks);

  await expect(navLinks.first()).toBeVisible();
  await expect(navLinks).toHaveCount(expectedLinks.length);
  expect(await navLinks.allInnerTexts()).toEqual(expectedLinks);
});