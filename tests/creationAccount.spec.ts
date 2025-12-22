import { test, expect, Page } from '@playwright/test';
import { SigInFormPage } from '../src/page-object/signInPage'; 
import { Creds } from '../fixtures/creds.ts';
import {faker} from '@faker-js/faker'


test.describe('The login/signUp tests with valid and invalid credentials', () => {
  test.beforeEach(async ({ page }) => {
  const response = await page.goto('/');
  expect(response?.ok()).toBeTruthy();
  });

test('Should authorize with valid credentials', async ({ page }) => {
  const signInPage = new SigInFormPage(page);
  await signInPage.loginWithValidCredentials({email: Creds.login.email, password: Creds.login.password});
});

test('Should create a new account with valid credentials', async ({ page }) => {
  const signInPage = new SigInFormPage(page);
  await signInPage.signUpForm({firstName: faker.person.firstName(),
                               lastName: faker.person.lastName(),
                               email: `aqa-${faker.internet.email()}`,
                               password: `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`});
  await signInPage.registrationButton.click();
  await expect(page.locator('[class*="text-danger"]')).toBeVisible();
});

test('Should try to create a new account with empty first name', async ({ page }) => {
  const signInPage = new SigInFormPage(page);
  await signInPage.signUpForm({firstName:'',
                               lastName: faker.person.lastName(),
                               email: `aqa-${faker.internet.email()}`,
                               password: `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`});
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with short first name', async ({ page }) => {
  const signInPage = new SigInFormPage(page);
  await signInPage.signUpForm({firstName: Creds.signUp.shortName,
                               lastName: faker.person.lastName(),
                               email: `aqa-${faker.internet.email()}`,
                               password: `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`});
  await expect(page.locator('[class="invalid-feedback"]')).toBeVisible();
});

test('Should try to create a new account with long first name', async ({ page }) => {
  const signInPage = new SigInFormPage(page);
  await signInPage.signUpForm({firstName: faker.lorem.paragraph(),
                               lastName: faker.person.lastName(),
                               email: `aqa-${faker.internet.email()}`,
                               password: `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`});
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with invalid first name', async ({ page }) => {
  const signInPage = new SigInFormPage(page);
  await signInPage.signUpForm({firstName: `5#${faker.internet.password()}`,
                               lastName: faker.person.lastName(),
                               email: `aqa-${faker.internet.email()}`,
                               password: `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`});
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account spaced first name', async ({ page }) => {
  const signInPage = new SigInFormPage(page);
  await signInPage.signUpForm({firstName: `   ${faker.person.firstName()}   `,
                               lastName: faker.person.lastName(),
                               email: `aqa-${faker.internet.email()}`,
                               password: `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`});
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with empty last name', async ({ page }) => {
  const signInPage = new SigInFormPage(page);
  await signInPage.signUpForm({firstName:  faker.person.firstName(),
                               lastName: '',
                               email: `aqa-${faker.internet.email()}`,
                               password: `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`});
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with short last name', async ({ page }) => {
  const signInPage = new SigInFormPage(page);
  await signInPage.signUpForm({firstName: faker.person.firstName(),
                               lastName: Creds.signUp.shortName,
                               email: `aqa-${faker.internet.email()}`,
                               password: `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`});
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with long last name', async ({ page }) => {
  const signInPage = new SigInFormPage(page);
  await signInPage.signUpForm({firstName: faker.person.firstName(),
                               lastName: faker.lorem.paragraph(),
                               email: `aqa-${faker.internet.email()}`,
                               password: `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`});
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with invalid last name', async ({ page }) => {
  const signInPage = new SigInFormPage(page);
  await signInPage.signUpForm({firstName: faker.person.firstName(),
                               lastName:faker.internet.password(),
                               email: `aqa-${faker.internet.email()}`,
                               password: `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`});
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account spaced last name', async ({ page }) => {
  const signInPage = new SigInFormPage(page);
  await signInPage.signUpForm({firstName: faker.person.firstName(),
                               lastName: `   ${faker.person.lastName()}   `,
                               email: `aqa-${faker.internet.email()}`,
                               password: `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`});
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with empty email', async ({ page }) => {
  const signInPage = new SigInFormPage(page);
  await signInPage.signUpForm({firstName: faker.person.firstName(),
                               lastName: faker.person.lastName(),
                               email: '',
                               password: `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`});
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with invalid email', async ({ page }) => {
  const signInPage = new SigInFormPage(page);
  await signInPage.signUpForm({firstName: faker.person.firstName(),
                               lastName: faker.person.lastName(),
                               email: faker.lorem.word(5),
                               password: `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`});
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with spaced email', async ({ page }) => {
  const signInPage = new SigInFormPage(page);
  await signInPage.signUpForm({firstName: faker.person.firstName(),
                               lastName: faker.person.lastName(),
                               email: `   ${faker.internet.email()}   `,
                               password: `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`});
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with empty password', async ({ page }) => {
  const signInPage = new SigInFormPage(page);
  await signInPage.signUpForm({firstName:  faker.person.firstName(),
                               lastName: faker.person.lastName(),
                               email: `aqa-${faker.internet.email()}`,
                               password: ''});
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with short password', async ({ page }) => {
  const signInPage = new SigInFormPage(page);
  await signInPage.signUpForm({firstName: faker.person.firstName(),
                               lastName: faker.person.lastName(),
                               email: `aqa-${faker.internet.email()}`,
                               password: `${faker.internet.password({
                                         length: 7,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`});
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with long password', async ({ page }) => {
  const signInPage = new SigInFormPage(page);
  await signInPage.signUpForm({firstName: faker.person.firstName(),
                               lastName: faker.person.lastName(),
                               email: `aqa-${faker.internet.email()}`,
                               password: `i5${faker.internet.password({
                                         length: 21,
                                         memorable: false,
                                         pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
  })}`});
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with small letters password', async ({ page }) => {
  const signInPage = new SigInFormPage(page);
  await signInPage.signUpForm({firstName: faker.person.firstName(),
                               lastName: faker.person.lastName(),
                               email: `aqa-${faker.internet.email()}`,
                               password: `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[a-z0-9!@#$%^&*()_+=-]/,
  })}`});
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with big letters password', async ({ page }) => {
  const signInPage = new SigInFormPage(page);
  await signInPage.signUpForm({firstName: faker.person.firstName(),
                               lastName: faker.person.lastName(),
                               email: `aqa-${faker.internet.email()}`,
                               password: `i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[A-Z0-9!@#$%^&*()_+=-]/,
  })}`});
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with password without numbers', async ({ page }) => {
  const signInPage = new SigInFormPage(page);
  await signInPage.signUpForm({firstName: faker.person.firstName(),
                               lastName: faker.person.lastName(),
                               email: `aqa-${faker.internet.email()}`,
                               password: `${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[[A-Za-z!@#$%^&*()_+=-]/,
  })}`});
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with spaced password', async ({ page }) => {
  const signInPage = new SigInFormPage(page);
  await signInPage.signUpForm({firstName: faker.person.firstName(),
                               lastName: faker.person.lastName(),
                               email: `aqa-${faker.internet.email()}`,
                               password: ` i5${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[[A-Za-z!@#$%^&*()_+=-]/,
  })} `});
  await expect(page.locator('.invalid-feedback')).toBeVisible();
});

test('Should try to create a new account with different second password', async ({ page }) => {
  const signInPage = new SigInFormPage(page);
  await signInPage.signUpFormWithDifferentSecondPassword({firstName: faker.person.firstName(),
                               lastName: faker.person.lastName(),
                               email: `aqa-${faker.internet.email()}`,
                               password: `i5${faker.internet.password({
                                         length: 8,
                                         memorable: false,
                                         pattern: /[[A-Za-z!@#$%^&*()_+=-]/,
  })}`,
                               secondPassword: `i3${faker.internet.password({
                                         length: 12,
                                         memorable: false,
                                         pattern: /[[A-Za-z!@#$%^&*()_+=-]/,
  })}`});
  await expect(page.locator('.invalid-feedback')).toBeVisible();

});
 
});

