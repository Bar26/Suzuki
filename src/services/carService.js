const cars= require ('../data/cars.json')

export const carService = {
    query,
    getById
}

function query(){
    console.log('in service');
    console.log(cars);
    return cars
}

function getById(carId){
    return cars.find(car=> car._id===carId)
}