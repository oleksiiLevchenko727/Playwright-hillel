import { test, expect } from '@playwright/test';
import { Creds } from '../fixtures/creds.ts';
import { faker } from '@faker-js/faker'


test.describe('The login/signUp tests with valid and invalid credentials', () => {
  test.beforeEach(async ({ page }) => {
  const response = await page.goto('/');
  expect(response?.ok()).toBeTruthy();
  });

test('Should authorize with valid credentials', async ({ page }) => {
        const signInButton = page.locator('button[class*="header_signin"]');
        const emailField = page.locator('input[name="email"]');
        const passwordField = page.locator('input[name="password"]');
        const registrationButton = page.locator('button[type="button"][class*="primary"]');
        const logoutButton = page.locator('[class*="text-danger"]');

        await signInButton.click()
        await emailField.fill(Creds.login.email)
        await passwordField.fill(Creds.login.password)
        await registrationButton.click()
        await expect(logoutButton).toBeVisible()

});

test('Should create a new account with valid credentials', async ({ page }) => {
        const signUpButton = page.locator('button[class*="btn-primary"]');
        const firstNameField = page.locator('input[name="name"]');
        const lastNameField = page.locator('input[name="lastName"]');
        const emailField = page.locator('input[name="email"]');
        const passwordField = page.locator('input[name="password"]');
        const reEnterPasswordField = page.locator('input[name="repeatPassword"]');
        const registrationButton = page.locator('button[type="button"][class*="primary"]');
        const password = `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`;

  await signUpButton.click();
  await firstNameField.fill(faker.person.firstName());
  await lastNameField.fill(faker.person.lastName());
  await emailField.fill(`aqa-${faker.internet.email()}`);
  await passwordField.fill(password);
  await reEnterPasswordField.fill(password);
  await registrationButton.click();
  await expect(page.locator('[class*="text-danger"]')).toBeVisible();
});

test('Should try to create a new account with empty first name', async ({ page }) => {
        const signUpButton = page.locator('button[class*="btn-primary"]');
        const firstNameField = page.locator('input[name="name"]');
        const lastNameField = page.locator('input[name="lastName"]');
        const emailField = page.locator('input[name="email"]');
        const passwordField = page.locator('input[name="password"]');
        const reEnterPasswordField = page.locator('input[name="repeatPassword"]');
        const password = `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`;
  await signUpButton.click();
  await firstNameField.fill('');
  await lastNameField.fill(faker.person.lastName());
  await emailField.fill(`aqa-${faker.internet.email()}`);
  await passwordField.fill(password);
  await reEnterPasswordField.fill(password);
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with short first name', async ({ page }) => {
        const signUpButton = page.locator('button[class*="btn-primary"]');
        const firstNameField = page.locator('input[name="name"]');
        const lastNameField = page.locator('input[name="lastName"]');
        const emailField = page.locator('input[name="email"]');
        const passwordField = page.locator('input[name="password"]');
        const reEnterPasswordField = page.locator('input[name="repeatPassword"]');
        const password = `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`;
  await signUpButton.click();
  await firstNameField.fill(Creds.signUp.shortName);
  await lastNameField.fill(faker.person.lastName());
  await emailField.fill(`aqa-${faker.internet.email()}`);
  await passwordField.fill(password);
  await reEnterPasswordField.fill(password);
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with long first name', async ({ page }) => {
        const signUpButton = page.locator('button[class*="btn-primary"]');
        const firstNameField = page.locator('input[name="name"]');
        const lastNameField = page.locator('input[name="lastName"]');
        const emailField = page.locator('input[name="email"]');
        const passwordField = page.locator('input[name="password"]');
        const reEnterPasswordField = page.locator('input[name="repeatPassword"]');
        const password = `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`;
  await signUpButton.click();
  await firstNameField.fill(faker.lorem.paragraph());
  await lastNameField.fill(faker.person.lastName());
  await emailField.fill(`aqa-${faker.internet.email()}`);
  await passwordField.fill(password);
  await reEnterPasswordField.fill(password);
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with invalid first name', async ({ page }) => {
        const signUpButton = page.locator('button[class*="btn-primary"]');
        const firstNameField = page.locator('input[name="name"]');
        const lastNameField = page.locator('input[name="lastName"]');
        const emailField = page.locator('input[name="email"]');
        const passwordField = page.locator('input[name="password"]');
        const reEnterPasswordField = page.locator('input[name="repeatPassword"]');
        const password = `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`;
  await signUpButton.click();
  await firstNameField.fill(`5#${faker.internet.password()}`);
  await lastNameField.fill(faker.person.lastName());
  await emailField.fill(`aqa-${faker.internet.email()}`);
  await passwordField.fill(password);
  await reEnterPasswordField.fill(password);
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account spaced first name', async ({ page }) => {
        const signUpButton = page.locator('button[class*="btn-primary"]');
        const firstNameField = page.locator('input[name="name"]');
        const lastNameField = page.locator('input[name="lastName"]');
        const emailField = page.locator('input[name="email"]');
        const passwordField = page.locator('input[name="password"]');
        const reEnterPasswordField = page.locator('input[name="repeatPassword"]');
        const password = `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`;
  await signUpButton.click();
  await firstNameField.fill(`   ${faker.person.firstName()}   `);
  await lastNameField.fill(faker.person.lastName());
  await emailField.fill(`aqa-${faker.internet.email()}`);
  await passwordField.fill(password);
  await reEnterPasswordField.fill(password);
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with empty last name', async ({ page }) => {
        const signUpButton = page.locator('button[class*="btn-primary"]');
        const firstNameField = page.locator('input[name="name"]');
        const lastNameField = page.locator('input[name="lastName"]');
        const emailField = page.locator('input[name="email"]');
        const passwordField = page.locator('input[name="password"]');
        const reEnterPasswordField = page.locator('input[name="repeatPassword"]');
        const password = `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`;
  await signUpButton.click();
  await firstNameField.fill(faker.person.firstName());
  await lastNameField.fill('');
  await emailField.fill(`aqa-${faker.internet.email()}`);
  await passwordField.fill(password);
  await reEnterPasswordField.fill(password);
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with short last name', async ({ page }) => {
        const signUpButton = page.locator('button[class*="btn-primary"]');
        const firstNameField = page.locator('input[name="name"]');
        const lastNameField = page.locator('input[name="lastName"]');
        const emailField = page.locator('input[name="email"]');
        const passwordField = page.locator('input[name="password"]');
        const reEnterPasswordField = page.locator('input[name="repeatPassword"]');
        const password = `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`;
  await signUpButton.click();
  await firstNameField.fill(faker.person.firstName());
  await lastNameField.fill(Creds.signUp.shortName);
  await emailField.fill(`aqa-${faker.internet.email()}`);
  await passwordField.fill(password);
  await reEnterPasswordField.fill(password);
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with long last name', async ({ page }) => {
        const signUpButton = page.locator('button[class*="btn-primary"]');
        const firstNameField = page.locator('input[name="name"]');
        const lastNameField = page.locator('input[name="lastName"]');
        const emailField = page.locator('input[name="email"]');
        const passwordField = page.locator('input[name="password"]');
        const reEnterPasswordField = page.locator('input[name="repeatPassword"]');
        const password = `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`;
  await signUpButton.click();
  await firstNameField.fill(faker.person.firstName());
  await lastNameField.fill(faker.lorem.paragraph());
  await emailField.fill(`aqa-${faker.internet.email()}`);
  await passwordField.fill(password);
  await reEnterPasswordField.fill(password);
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with invalid last name', async ({ page }) => {
        const signUpButton = page.locator('button[class*="btn-primary"]');
        const firstNameField = page.locator('input[name="name"]');
        const lastNameField = page.locator('input[name="lastName"]');
        const emailField = page.locator('input[name="email"]');
        const passwordField = page.locator('input[name="password"]');
        const reEnterPasswordField = page.locator('input[name="repeatPassword"]');
        const password = `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`;
  await signUpButton.click();
  await firstNameField.fill(faker.person.firstName());
  await lastNameField.fill(`5#${faker.internet.password()}`);
  await emailField.fill(`aqa-${faker.internet.email()}`);
  await passwordField.fill(password);
  await reEnterPasswordField.fill(password);
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account spaced last name', async ({ page }) => {
        const signUpButton = page.locator('button[class*="btn-primary"]');
        const firstNameField = page.locator('input[name="name"]');
        const lastNameField = page.locator('input[name="lastName"]');
        const emailField = page.locator('input[name="email"]');
        const passwordField = page.locator('input[name="password"]');
        const reEnterPasswordField = page.locator('input[name="repeatPassword"]');
        const password = `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`;
  await signUpButton.click();
  await firstNameField.fill(faker.person.firstName());
  await lastNameField.fill(`   ${faker.person.lastName()}   `);
  await emailField.fill(`aqa-${faker.internet.email()}`);
  await passwordField.fill(password);
  await reEnterPasswordField.fill(password);
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with empty email', async ({ page }) => {
        const signUpButton = page.locator('button[class*="btn-primary"]');
        const firstNameField = page.locator('input[name="name"]');
        const lastNameField = page.locator('input[name="lastName"]');
        const emailField = page.locator('input[name="email"]');
        const passwordField = page.locator('input[name="password"]');
        const reEnterPasswordField = page.locator('input[name="repeatPassword"]');
        const password = `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`;
  await signUpButton.click();
  await firstNameField.fill(faker.person.firstName());
  await lastNameField.fill(faker.person.lastName());
  await emailField.fill('');
  await passwordField.fill(password);
  await reEnterPasswordField.fill(password);
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with invalid email', async ({ page }) => {
        const signUpButton = page.locator('button[class*="btn-primary"]');
        const firstNameField = page.locator('input[name="name"]');
        const lastNameField = page.locator('input[name="lastName"]');
        const emailField = page.locator('input[name="email"]');
        const passwordField = page.locator('input[name="password"]');
        const reEnterPasswordField = page.locator('input[name="repeatPassword"]');
        const password = `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`;
  await signUpButton.click();
  await firstNameField.fill(faker.person.firstName());
  await lastNameField.fill(faker.person.lastName());
  await emailField.fill(faker.lorem.word(5));
  await passwordField.fill(password);
  await reEnterPasswordField.fill(password);
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with spaced email', async ({ page }) => {
        const signUpButton = page.locator('button[class*="btn-primary"]');
        const firstNameField = page.locator('input[name="name"]');
        const lastNameField = page.locator('input[name="lastName"]');
        const emailField = page.locator('input[name="email"]');
        const passwordField = page.locator('input[name="password"]');
        const reEnterPasswordField = page.locator('input[name="repeatPassword"]');
        const password = `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`;
  await signUpButton.click();
  await firstNameField.fill(faker.person.firstName());
  await lastNameField.fill(faker.person.lastName());
  await emailField.fill(`  ${faker.internet.email()}  `);
  await passwordField.fill(password);
  await reEnterPasswordField.fill(password);
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with empty password', async ({ page }) => {
        const signUpButton = page.locator('button[class*="btn-primary"]');
        const firstNameField = page.locator('input[name="name"]');
        const lastNameField = page.locator('input[name="lastName"]');
        const emailField = page.locator('input[name="email"]');
        const passwordField = page.locator('input[name="password"]');
        const reEnterPasswordField = page.locator('input[name="repeatPassword"]');
        const password = `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`;
  await signUpButton.click();
  await firstNameField.fill(faker.person.firstName());
  await lastNameField.fill(faker.person.lastName());
  await emailField.fill(faker.internet.email());
  await passwordField.fill('');
  await reEnterPasswordField.fill(password);
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with short password', async ({ page }) => {
        const signUpButton = page.locator('button[class*="btn-primary"]');
        const firstNameField = page.locator('input[name="name"]');
        const lastNameField = page.locator('input[name="lastName"]');
        const emailField = page.locator('input[name="email"]');
        const passwordField = page.locator('input[name="password"]');
        const reEnterPasswordField = page.locator('input[name="repeatPassword"]');
        const password = `i5${faker.internet.password({
                                         length: 5,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`;
  await signUpButton.click();
  await firstNameField.fill(faker.person.firstName());
  await lastNameField.fill(faker.person.lastName());
  await emailField.fill(faker.internet.email());
  await passwordField.fill(password);
  await reEnterPasswordField.fill(password);
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with long password', async ({ page }) => {
        const signUpButton = page.locator('button[class*="btn-primary"]');
        const firstNameField = page.locator('input[name="name"]');
        const lastNameField = page.locator('input[name="lastName"]');
        const emailField = page.locator('input[name="email"]');
        const passwordField = page.locator('input[name="password"]');
        const reEnterPasswordField = page.locator('input[name="repeatPassword"]');
        const password = `i5${faker.internet.password({
                                         length: 21,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`;
  await signUpButton.click();
  await firstNameField.fill(faker.person.firstName());
  await lastNameField.fill(faker.person.lastName());
  await emailField.fill(faker.internet.email());
  await passwordField.fill(password);
  await reEnterPasswordField.fill(password);
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with small letters password', async ({ page }) => {
        const signUpButton = page.locator('button[class*="btn-primary"]');
        const firstNameField = page.locator('input[name="name"]');
        const lastNameField = page.locator('input[name="lastName"]');
        const emailField = page.locator('input[name="email"]');
        const passwordField = page.locator('input[name="password"]');
        const reEnterPasswordField = page.locator('input[name="repeatPassword"]');
        const password = `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[a-z0-9!@#$%^&*()_+=-]/,
  })}`;
  await signUpButton.click();
  await firstNameField.fill(faker.person.firstName());
  await lastNameField.fill(faker.person.lastName());
  await emailField.fill(faker.internet.email());
  await passwordField.fill(password);
  await reEnterPasswordField.fill(password);
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with big letters password', async ({ page }) => {
        const signUpButton = page.locator('button[class*="btn-primary"]');
        const firstNameField = page.locator('input[name="name"]');
        const lastNameField = page.locator('input[name="lastName"]');
        const emailField = page.locator('input[name="email"]');
        const passwordField = page.locator('input[name="password"]');
        const reEnterPasswordField = page.locator('input[name="repeatPassword"]');
        const password = `5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Z0-9!@#$%^&*()_+=-]/,
  })}`;
  await signUpButton.click();
  await firstNameField.fill(faker.person.firstName());
  await lastNameField.fill(faker.person.lastName());
  await emailField.fill(faker.internet.email());
  await passwordField.fill(password);
  await reEnterPasswordField.fill(password);
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with password without numbers', async ({ page }) => {
        const signUpButton = page.locator('button[class*="btn-primary"]');
        const firstNameField = page.locator('input[name="name"]');
        const lastNameField = page.locator('input[name="lastName"]');
        const emailField = page.locator('input[name="email"]');
        const passwordField = page.locator('input[name="password"]');
        const reEnterPasswordField = page.locator('input[name="repeatPassword"]');
        const password = `${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z!@#$%^&*()_+=-]/,
  })}`;
  await signUpButton.click();
  await firstNameField.fill(faker.person.firstName());
  await lastNameField.fill(faker.person.lastName());
  await emailField.fill(faker.internet.email());
  await passwordField.fill(password);
  await reEnterPasswordField.fill(password);
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with spaced password', async ({ page }) => {
        const signUpButton = page.locator('button[class*="btn-primary"]');
        const firstNameField = page.locator('input[name="name"]');
        const lastNameField = page.locator('input[name="lastName"]');
        const emailField = page.locator('input[name="email"]');
        const passwordField = page.locator('input[name="password"]');
        const reEnterPasswordField = page.locator('input[name="repeatPassword"]');
        const password = `${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`;
  await signUpButton.click();
  await firstNameField.fill(faker.person.firstName());
  await lastNameField.fill(faker.person.lastName());
  await emailField.fill(faker.internet.email());
  await passwordField.fill(`  ${password}  `);
  await reEnterPasswordField.fill(password);
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with different second password', async ({ page }) => {
        const signUpButton = page.locator('button[class*="btn-primary"]');
        const firstNameField = page.locator('input[name="name"]');
        const lastNameField = page.locator('input[name="lastName"]');
        const emailField = page.locator('input[name="email"]');
        const passwordField = page.locator('input[name="password"]');
        const reEnterPasswordField = page.locator('input[name="repeatPassword"]');
        const password = `${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`;
       const repeatPassword = `i3${faker.internet.password({
                                         length: 9,
                                         memorable: false,
                                         pattern: /[A-Za-z!@#$%^&*()_+=-]/,
  })}`;
  await signUpButton.click();
  await firstNameField.fill(faker.person.firstName());
  await lastNameField.fill(faker.person.lastName());
  await emailField.fill(faker.internet.email());
  await passwordField.fill(password);
  await reEnterPasswordField.fill(repeatPassword);
  await expect(page.locator('[type="button"][class="btn btn-primary"]', { hasText: 'Register' })).toBeDisabled();


});
 
});

