import _carService from '../Services/CarService.js'

export default class CarController {
  constructor() {
    console.log("car controller works")
  }


  create(event) {
    event.preventDefault() // prevents the page from refreshing
    let formData = event.target
    let newCarObject = {
      make: formData.make.value,
      model: formData.model.value,
      year: formData.year.value,
      price: formData.price.value,
      imgUrl: formData.imgUrl.value,
      description: formData.description.value
    }
    console.log(newCarObject)
  }
}