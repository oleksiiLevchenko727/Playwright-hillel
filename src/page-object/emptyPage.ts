import { Page, Locator, expect } from "@playwright/test";

class EmptyPage {

    readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  
  } 
}
export { EmptyPage };