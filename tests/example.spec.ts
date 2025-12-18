import { test, expect, Page } from '@playwright/test';
import { before, beforeEach, describe } from 'node:test';

 

test.describe('The tests', () => {
  test.beforeEach(async ({ page }) => {
  const response = await page.goto('/');
  expect(response?.ok()).toBeTruthy();
  });

test('The first empty test', async ({ page }) => {
 
});

test('The second empty test', async ({ page }) => {
  
});

});