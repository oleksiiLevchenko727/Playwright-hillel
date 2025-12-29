import {adminFixture} from "../../../src/customFixtures/adminFixture.js";
import {expect} from "../../../src/customFixtures/guestFixture.js";
import CreateCarDTOFactory from "../../../src/domain/cars/factory/CreateCarDTOFactory.js";

adminFixture.describe.only("use storage state @my-label", () => {
    adminFixture('Create car with UI', async ({page, garagePage}) => {
        await adminFixture.step("Verify created car details", async () => {
            await page.pause()
        })
    })

    adminFixture('Create car with API Porshe Panamera', async ({apiClient}) => {
        const body = CreateCarDTOFactory.porshePanamera(21300)
        const response = await apiClient.cars.createCar(body.extract())
        await expect(response).toBeOK()
    })

    adminFixture('Create car with API Fiat Panda', async ({apiClient}) => {
        const body = CreateCarDTOFactory.fiatPanda(12470)
        const response = await apiClient.cars.createCar(body.extract())
        await expect(response).toBeOK()
    })

    adminFixture('Create car with with empty values', async ({apiClient}) => {
        const body = CreateCarDTOFactory.empty()
            .setBrandId()
            .setModelId()
            .setMileage()
        const response = await apiClient.cars.createCar(body.extract())
        await  expect(response.ok()).toBeFalsy()
    })

    adminFixture('Create car Fiat Panda with negative mileage API ', async ({apiClient}) => {
        const body = CreateCarDTOFactory.fiatPanda(-12470)
        const response = await apiClient.cars.createCar(body.extract())
        await  expect(response.ok()).toBeFalsy()
    })

    
})