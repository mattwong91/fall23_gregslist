import { AppState } from "../AppState.js"
import { housesService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class HousesController {
  constructor() {
    _drawHouses()
    AppState.on('houses', _drawHouses)
  }

  createHouse(event) {
    event.preventDefault()

    const form = event.target
    const houseData = getFormData(form)
    housesService.createHouse(houseData)

    form.reset()
  }

  async sellHouse(houseId) {
    const confirmDelete = await Pop.confirm("Are you sure you want to sell this house?")
    if (!confirmDelete) {
      return
    }
    housesService.sellHouse(houseId)
  }
}

function _drawHouses() {
  let content = ''
  AppState.houses.forEach(house => content += house.houseCard)

  setHTML('houses', content)
}