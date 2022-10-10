import { carService } from "../services/carService"


export function setCurrCar(carId) {
    return async (dispatch) => {
        let currCar
        try {
            currCar = await carService.getById(carId)
            dispatch({ type: 'SET_CAR', currCar })

        } catch (err) {
            console.error('Cannot set car', err)
        }
    }
}

export function loadCars() {
    return async (dispatch) => {
        let cars
        try {
            cars = await carService.query()
            dispatch({ type: 'SET_CARS', cars })

        } catch (err) {
            console.error('Cannot set cars', err)
        }
    }
}