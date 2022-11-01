import { httpService } from './http.service'
const cars = require('../data/cars.json')



// function query() {
//     return cars
// }

async function query() {
    return httpService.get(`car`)
}

// function getById(carId) {
//     return cars.find(car => car._id === carId)
// }

async function getById(id) {
    return httpService.get(`car/${id}`)
}

const addCar = () => {
    // let car = getById('c1')
    let car = cars[4]
    delete car._id
    httpService.post('car', car)
}


export const carService = {
    query,
    getById,
    addCar
}
