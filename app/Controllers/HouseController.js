import _houseService from '../Services/HouseService.js'
import _store from '../store.js'


function _drawHouses() {
  let template = ''
  let houses = _store.State.houses

  houses.forEach((house, index) => template += house.getTemplate(index))
  document.getElementById("houses").innerHTML = template
}

export default class HouseController {
  constructor() {
    console.log("house controller works");
    _drawHouses()

  }


  create(event) {

    event.preventDefault()
    let formData = event.target
    let newHouseObject = {
      bed: formData.bed.value,
      bath: formData.bath.value,
      year: formData.year.value,
      sqft: formData.sqft.value,
      floors: formData.floors.value,
      price: formData.price.value,
      imgUrl: formData.imgUrl.value,
      description: formData.description.value,
    }

    _houseService.create(newHouseObject)
    formData.reset()
    // @ts-ignore
    $('#add-house-modal').modal('toggle')
    _drawHouses()

    console.log(newHouseObject)
  }

  delete(index) {
    _houseService.delete(index)
    _drawHouses()
  }
}