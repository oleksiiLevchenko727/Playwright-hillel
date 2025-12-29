import {guestTest, expect} from "../../../src/customFixtures/guestFixture.js";
import {request as pwRequest} from "@playwright/test";

guestTest.describe("API tests @my-label", () => {
    const expectedBrands = {
        "status":"ok",
        "data":
        [
            {
                "id":1,
                "title":"Audi",
                "logoFilename":"audi.png"
            },
            {
                "id":2,"title":"BMW",
                "logoFilename":"bmw.png"
            },
            {
                "id":3,
                "title":"Ford",
                "logoFilename":"ford.png"
            },
            {
                "id":4,
                "title":"Porsche",
                "logoFilename":"porsche.png"
            },
            {
                "id":5,
                "title":"Fiat",
                "logoFilename":"fiat.png"
            }
        ]
    }

    guestTest('Get car brands', async ({request}) => {
        await guestTest.step("Create a new car", async () => {
           const response = await request.get("/api/cars/brands")
            const body = await response.json()
            expect(body, "Car brands should be valid").toEqual(expectedBrands)
        })
    })

    guestTest('Create car with storage state', async () => {
        const request = await pwRequest.newContext({
            storageState: 'state/adminStorageState.json'
        })

        await guestTest.step("Create a new car", async () => {
              const response = await request.post("/api/cars", {
                  data : {"carBrandId":1,"carModelId":1,"mileage":321}
              })

              await expect(response).toBeOK()
        })
    })
})