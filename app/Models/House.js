export default class House {
  constructor(data) {
    this.id = data._id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.year = data.year
    this.floors = data.floors
    this.price = data.price
    this.imgUrl = data.imgUrl
    this.description = data.description || "No description provided."
  }

  get Template() {
    return /*html*/ `
    <div class="col-4 m-3 border border-info rounded shadow">
    <img class="img-fluid" src="${this.imgUrl}" />
      <h2>${this.bedrooms} bedroom</h2>
      <h2>${this.bathrooms} bath</h2>
      <h5>${this.floors} floor(s)</h5>
      <h5>Year built: ${this.year}</h5>
      <h5>Price: ${this.price}</h5>
      <button class="btn btn-danger btn-block" onclick="app.carController.delete(${this.id})">Delete</button>
      <button class="btn btn-success btn-block" onclick="app.carController.delete(${this.id})">Bid</button>
    </div>`
  }


}