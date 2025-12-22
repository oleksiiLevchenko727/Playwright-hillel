import { Page, Locator, expect } from "@playwright/test";

class SigInFormPage {

    readonly page: Page;
    readonly signInButton: Locator;
    readonly signUpButton: Locator;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly reEnterPasswordField: Locator;
    readonly registrationButton: Locator;
    readonly submitLoginButton: Locator;
    readonly logoutButton: Locator;
    readonly errorMessage: Locator;

  constructor(page: Page) {
        this.page = page;
        this.signInButton = page.locator('button[class*="header_signin"]');
        this.signUpButton = page.locator('button[class*="btn-primary"]');
        this.firstNameField = page.locator('input[name="name"]');
        this.lastNameField = page.locator('input[name="lastName"]');
        this.emailField = page.locator('input[name="email"]');
        this.passwordField = page.locator('input[name="password"]');
        this.reEnterPasswordField = page.locator('input[name="repeatPassword"]');
        this.registrationButton = page.locator('button[type="button"][class*="primary"]');
        this.submitLoginButton = page.locator('app-signin-modal button[class*="btn-primary"]');
        this.logoutButton = page.locator('[class*="text-danger"]');
        this.errorMessage = page.locator('.invalid-feedback');
  } 

    async loginWithValidCredentials(  {email, password}: {email: string, password: string}) {
        await this.signInButton.click()
        await this.emailField.fill(email)
        await this.passwordField.fill(password)
        await this.registrationButton.click()
        await expect(this.logoutButton).toBeVisible()
    }

    async signUpForm({firstName, lastName, email, password}: {firstName: string, lastName: string, email: string, password: string}) {
        await this.signUpButton.click()
        await this.firstNameField.fill(firstName)
        await this.lastNameField.fill(lastName)
        await this.emailField.fill(email)
        await this.passwordField.fill(password)
        await this.reEnterPasswordField.fill(password)
    }

        async signUpFormWithDifferentSecondPassword({firstName, lastName, email, password, secondPassword}: {firstName: string, lastName: string, email: string, password: string, secondPassword: string}) {
        await this.signUpButton.click()
        await this.firstNameField.fill(firstName)
        await this.lastNameField.fill(lastName)
        await this.emailField.fill(email)
        await this.passwordField.fill(password)
        await this.reEnterPasswordField.fill(secondPassword)
    }
 
}
export { SigInFormPage };