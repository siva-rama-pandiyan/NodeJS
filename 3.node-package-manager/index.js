const lodash = require("lodash");

const names = ["siva", "santhiya", "yugashree"];

const capitalize = lodash.map(names, lodash.capitalize);

console.log("capitalize", capitalize);
