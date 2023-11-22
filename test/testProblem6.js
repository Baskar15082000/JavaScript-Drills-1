const inventory = require("../inventory");
const findAudiAndBMW = require("../problem6");
const AudiAndBmw = findAudiAndBMW(inventory);

console.log(JSON.stringify(AudiAndBmw));
