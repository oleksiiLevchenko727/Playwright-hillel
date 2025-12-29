import { baseCustomFixture as base } from "./baseCustomFixture.js";
import {request as pwRequest} from "@playwright/test";
import GaragePage from "../pageObjects/garage/GaragePage.js";
import ApiClient from "../clients/ApiClient.js";


export const adminFixture = base.extend({
    page: async ({browser}, use)=> {
        const ctx = await browser.newContext({
            storageState: 'state/adminStorageState.json'
        })
        const page = await ctx.newPage()
        await use (page)
    },
    request: async ({}, use)=> {
        const ctx = await pwRequest.newContext({
            storageState: 'state/adminStorageState.json'
        })

        await use(ctx)
    },
    apiClient: async ({request}, use)=> {
   
        const apiClient = new ApiClient(request)
        await use(apiClient)
    },
    garagePage: async ({page}, use)=> {
        const garagePage = new GaragePage(page)
        await garagePage.navigate()
        await use (garagePage)
    },
})