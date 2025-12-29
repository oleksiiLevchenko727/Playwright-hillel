import { test, expect } from '@playwright/test';
import { Creds } from '../../../fixtures/creds.ts';

test.describe('Should Log In and change first name and last name with interception API', () => {
  test.beforeEach(async ({ page }) => {
  const response = await page.goto('/');
  expect(response?.ok()).toBeTruthy();
  });

test('Should authorize and change first name and last name', async ({ page }) => {
 await page.route('**/profile**', async route => {
   await route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify({
      data: {
        userId: 313170,
        name: 'Denys',
        lastName: 'Gurov',
        photoFilename: 'default-user.png',
      },
    }),
  });
  });

  await page.locator('button[class*="header_signin"]').click();
  await page.locator('input[name="email"]').fill(Creds.login.email);
  await page.locator('input[name="password"]').fill(Creds.login.password);
  await page.locator('button[type="button"][class*="primary"]').click();

  await expect(page.locator('[class*="text-danger"]')).toBeVisible();

  await page.locator('[routerlink="profile"]').click();

  await expect(page.locator('[class*="profile_name"]')).toHaveText('Denys Gurov');

});

});
 

