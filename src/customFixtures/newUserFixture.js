import { baseCustomFixture as base } from "./baseCustomFixture.js";
import GaragePage from "../pageObjects/garage/GaragePage.js";

export const newUserTest = base.extend({
    userData: async ({}, use)=> {
        const data = {
            email: `user${Date.now()}@testmail.com`,
            password: 'TestPassword123!',
            firstName: 'John',
            lastName: 'Doe'
        }
        await use(data)
    },
    garagePage: async ({page, mainPage, userData}, use)=> {
  
        await use (new GaragePage(page))
 
    },
})