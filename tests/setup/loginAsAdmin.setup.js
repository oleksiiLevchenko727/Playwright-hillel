import {test as setup} from "@playwright/test"
import MainPage from "../../src/pageObjects/main/MainPage.js";

setup("Login as admin", async ({page, context}) => {

    const adminCredentials = {
        email: "stillstillsb@gmail.com",
        password: "sdfdsfa#$34ER"
    }

    const mainPage = new MainPage(page)
    await mainPage.navigate()
    await mainPage.loginWithCredentials(adminCredentials)

    await context.storageState({
        path: 'state/adminStorageState.json'
    })
})