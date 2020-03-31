import _houseService from '../Services/HouseService.js'
import _store from '../store.js'


function _drawHouses() {
  let template = ''
  let houses = _store.State.houses

  houses.forEach(house => template += house.Template)
  document.getElementById("houses").innerHTML = template
}

export default class HouseController {
  constructor() {
    console.log("house controller works");
    _store.subscribe('houses', _drawHouses)

  }


  create(event) {

    event.preventDefault()
    let formData = event.target
    let newHouseObject = {
      bedrooms: formData.bedrooms.value,
      bathrooms: formData.bathrooms.value,
      year: formData.year.value,
      floors: formData.floors.value,
      price: formData.price.value,
      imgUrl: formData.imgUrl.value,
      description: formData.description.value,
    }

    _houseService.create(newHouseObject)
    formData.reset()
    // @ts-ignore
    $('#add-house-modal').modal('toggle')

    console.log(newHouseObject)
  }

  delete(houseId) {
    _houseService.delete(houseId)
  }

  bid(houseId) {
    _houseService.bid(houseId)
  }
}