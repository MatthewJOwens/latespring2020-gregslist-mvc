import House from "../Models/House.js"
import _store from '../store.js'


// @ts-ignore
let _api = axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api/houses',
  timeout: 3000
})

class HouseService {
  bid(houseId) {
    let foundHouse = _store.State.houses.find(house => house.id == houseId)
    if (foundHouse) {
      foundHouse.price += 100
      _api.put(houseId, foundHouse)
        .then(res => {
          console.log(res.data);
          this.getHouses()
        })
        .catch(err => console.error(err))
    }
  }

  getHouses() {
    _api.get()
      .then(res => {
        console.log(res.data.data);
        let houses = res.data.data.map(rawHouseData => new House(rawHouseData))
        _store.commit('houses', houses)
      })
      .catch(err => console.error(err)
      )
  }

  delete(houseId) {
    _api.delete(houseId)
      .then(res => {
        console.log(res.data);
        this.getHouses()
      })
      .catch(err => console.error(err))
  }

  create(newHouseObject) {
    let newHouse = new House(newHouseObject)
    _store.State.houses.push(newHouse)
    console.log(_store.State.houses);
  }

  constructor() {
    console.log("house service works");
    this.getHouses()
  }
}

const HOUSESERVICE = new HouseService()
export default HOUSESERVICE