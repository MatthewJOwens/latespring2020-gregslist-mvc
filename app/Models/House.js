export default class House {
  constructor(data) {
    this.bed = data.bed
    this.bath = data.bath
    this.year = data.year
    this.sqft = data.sqft
    this.floors = data.floors
    this.price = data.price
    this.imgUrl = data.imgUrl
    this.description = data.description || "No description provided."
  }

  getTemplate(index) {
    return /*html*/ `
    <div class="col-4 m-3 border border-info rounded shadow">
    <img class="img-fluid" src="${this.imgUrl}" />
      <h2>${this.bed} bedroom</h2>
      <h2>${this.bath} bath</h2>
      <h4>${this.sqft} sq. ft.</h4>
      <h5>${this.floors} floor(s)</h5>
      <h5>Year built: ${this.year}</h5>
      <h5>Price: ${this.price}</h5>
      <button class="btn btn-danger btn-block" onclick="app.carController.delete(${index})">Delete</button>
    </div>`
  }


}