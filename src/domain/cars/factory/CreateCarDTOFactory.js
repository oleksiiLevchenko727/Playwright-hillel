import CreateCarDTO from "../dto/CreateCarDTO.js";

export default class CreateCarDTOFactory {
    static empty() {
        return new CreateCarDTO({
            carBrandId: null,
            carModelId: null,
            mileage: null
        });
    }

    static porshePanamera(mileage = 0) {
        return new CreateCarDTO({
            carBrandId: 4,
            carModelId: 18,
            mileage
        })
    }

    static fiatPanda(mileage = 0) {
        return new CreateCarDTO({
            carBrandId: 5,
            carModelId: 21,
            mileage
        })
    }
}