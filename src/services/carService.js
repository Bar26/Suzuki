import { httpService } from './http.service'
import { utilService } from './utilService'
const cars = require('../data/cars.json')



async function query() {
    let cars = utilService.loadFromStorage('cars')
    if (!cars || !cars.length){
        cars = await httpService.get(`car`)
        utilService.saveToStorage('cars', cars)
    }
    return cars
}


async function getById(id) {
    return httpService.get(`car/${id}`)
}

const addCar = () => {
    let car = cars[4]
    delete car._id
    httpService.post('car', car)
}


export const carService = {
    query,
    getById,
    addCar
}
