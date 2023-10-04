import { generateId } from "../utils/GenerateId.js"

export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.year = data.year
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }

  get houseCard() {
    return `
    <div class="col-11 mb-3">
      <div class="d-flex shadow">
        <img class="house-img" src="${this.imgUrl}" alt="House Name">
        <div class="p-3 w-100">
          <div>
            <h2>${this.name}</h2>
            <p>$${this.price.toLocaleString()}</p>
          </div>
          <h3 class="py-3">Stats</h3>
          <div class="d-flex justify-content-start">
            <div class="pe-5">
              <p>Year Built: ${this.year}</p>
              <p>${this.sqft} sqft</p>
            </div>
            <div>
              <p>${this.bedrooms} Bedrooms</p>
              <p>${this.bathrooms} Bathrooms</p>
            </div>
          </div>
          <div>
            <h3>Description</h3>
            <p class="mb-0">${this.description}</p>
            <div class="text-end">
              <button onclick="app.HousesController.sellHouse('${this.id}')" class="btn btn-danger">SELL HOUSE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }
}