// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website.
//Execute a function to Sort all the car model names into alphabetical order
//and log the results in the console as it was returned.

//to creat carmodel
function createCarModel(inventory) {
  const carModel = [];
  for (let i = 0; i < inventory.length; i++) {
    carModel.push(inventory[i].car_model);
  }
  return carModel;
}

//function to sort the copyInventory based on model names
function sortCarModel(carModel) {
  let n = carModel.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (carModel[j].toLowerCase() > carModel[j + 1].toLowerCase()) {
        swap(carModel, j, j + 1);
      }
    }
  }
  return carModel;
}

//swap
function swap(carModel, i, j) {
  let temp = carModel[i];
  carModel[i] = carModel[j];
  carModel[j] = temp;
}

module.exports = {
  createCarModel,
  sortCarModel,
};
