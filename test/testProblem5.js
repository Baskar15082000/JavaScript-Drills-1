const inventory = require("../inventory");
const findOlderCars = require("../problem5");
const createCarYears = require("../problem4");
const carYears = createCarYears(inventory);
const olderCars = findOlderCars(carYears, inventory, 2000);
console.log(olderCars);
console.log(olderCars.length);
