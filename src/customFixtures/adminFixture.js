import { baseCustomFixture as base } from "./baseCustomFixture.js";
import GaragePage from "../pageObjects/garage/GaragePage.js";


export const adminFixture = base.extend({
    page: async ({browser}, use)=> {
        const ctx = await browser.newContext({
            storageState: 'state/adminStorageState.json'
        })
        const page = await ctx.newPage()
        await use (page)
    },
    garagePage: async ({page}, use)=> {
        const garagePage = new GaragePage(page)
        await garagePage.navigate()
        await use (garagePage)
    },
})