const inventory = require("../inventory");
const problem3Obj = require("../problem3");
const carModel = problem3Obj.createCarModel(inventory);
const sortedCarModel = problem3Obj.sortCarModel(carModel);

console.log(sortedCarModel);
