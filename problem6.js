// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.
//Execute a function and return an array that only contains BMW and Audi cars.
//Once you have the BMWAndAudi array, use JSON.stringify()
//to show the results of the array in the console.

function toAudiAndBMW(inventory) {
  const audiAndBMW = [];
  for (let i = 0; i < inventory.length; i++) {
    let car = inventory[i];
    if (car.car_make === "BMW" || car.car_make === "Audi") {
      audiAndBMW.push(car);
    }
  }
  return audiAndBMW;
}
module.exports = toAudiAndBMW;
