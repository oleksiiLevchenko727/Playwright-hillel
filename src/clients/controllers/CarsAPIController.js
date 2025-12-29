import BaseController from "./BaseController.js";

export default class CarsAPIController  extends BaseController {
    _GET_CAR_BRANDS_PATH = '/api/cars/brands';
    _CREATE_CAR_PATH = '/api/cars';

    constructor(request) {
        super(request);
    }

    getCarBrands() {
        return this.request.get(this._GET_CAR_BRANDS_PATH);
    }

    createCar(carData) {
        return this.request.post(this._CREATE_CAR_PATH, {
            data: carData
        });
    }
}