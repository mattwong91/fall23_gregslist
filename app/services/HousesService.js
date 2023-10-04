import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { saveState } from "../utils/Store.js"

function _saveHouses() {
  saveState('houses', AppState.houses)
}

class HousesService {
  createHouse(houseData) {
    const newHouse = new House(houseData)
    AppState.houses.push(newHouse)

    _saveHouses()
    AppState.emit('houses')
  }

  sellHouse(houseId) {
    const houses = AppState.houses
    const houseIndex = houses.findIndex(house => house.id == houseId)

    if (houseIndex == -1) {
      throw new Error(`Could not find a car index with the id: ${houseIndex}`)
    }
    houses.splice(houseIndex, 1)

    _saveHouses()
    AppState.emit('houses')
  }
}

export const housesService = new HousesService()