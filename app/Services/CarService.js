import Car from "../Models/Car.js"
import _store from '../store.js'


class CarService {
  create(newCarObject) {
    let newCar = new Car(newCarObject)
    _store.State.cars.push(newCar)
    console.log(_store.State.cars)
  }
  constructor() {
    console.log("car service works")
  }
}


const CARSERVICE = new CarService()
export default CARSERVICE