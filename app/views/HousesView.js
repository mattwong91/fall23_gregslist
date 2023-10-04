export const HouseView = `
<div class="container-fluid">

      <section class="row">
        <div class="col-12 p-3">
          <h1>Houses</h1>
        </div>
      </section>

      <section class="row justify-content-center">
        <div class="col-12 col-md-4 p-4">
          <form onsubmit="app.HousesController.createHouse(event)">

            <div>
              <label for="name">Name</label>
              <input type="text" id="name" name="name" minlength="5" maxlength="20" placeholder="Enter house name here"
                required>
            </div>

            <div>
              <label for="imgUrl">Image URL</label>
              <input type="url" id="imgUrl" name="imgUrl" maxlength="400" placeholder="Paste image URL here" required>
            </div>

            <div class="d-flex justify-content-between">

              <div>
                <label for="price">House Listing Price</label>
                <input type="number" id="price" name="price" min="0" max="10000000" placeholder="Price" required>
              </div>
              <div>
                <label for="sqft">Square Feet</label>
                <input type="number" id="sqft" name="sqft" min="500" max="8000" placeholder="Sqft" required>
              </div>

              <div>
                <label for="year">Year Built</label>
                <input type="number" id="year" name="year" min="1600" max="2023" placeholder="Year" required>
              </div>
            </div>

            <div class="d-flex justify-content-between">
              <div>
                <label for="bedrooms">Number of bedrooms</label>
                <input type="number" id="bedrooms" name="bedrooms" min="1" max="10" placeholder="Bedrooms" required>
              </div>
              <div>
                <label for="bathrooms">Number of bathrooms</label>
                <input type="number" id="bathrooms" name="bathrooms" min="1" max="10" step="0.5" placeholder="Bathrooms"
                  required>
              </div>
            </div>

            <div>
              <label for="description">Description</label>
              <textarea name="description" id="description" rows="7" placeholder="House description"></textarea>
            </div>
            <div class="text-end">

              <button class="btn btn-success" type="submit">Submit</button>
            </div>

          </form>
        </div>
      </section>

      <section id="houses" class="row justify-content-center">

      </section>
    </div>
`