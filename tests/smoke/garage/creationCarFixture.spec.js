import {guestTest} from "../../../src/customFixtures/guestFixture.js";

guestTest.describe("Should create a car Ford Fiesta as guest user", () => {

    guestTest('Car creation', async ({garagePage, page}) => {
        const brand = 'Ford'
        const model = 'Fiesta'
        const mileage = '21400'

        await guestTest.step("Create a new car for instance Ford Fiesta", async () => {
        const addCar = await garagePage.openAddCar()
        await addCar.createCar({brand, model, mileage})
        })

        await guestTest.step("Verify created car details", async () => {
            const carCard = await garagePage.getCarCard({brand, model})
            await carCard.assertBrand(brand)
            await carCard.assertModel(model)
            await carCard.assertMileage(mileage)
        })
    })
})