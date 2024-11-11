const firstModule = require("./first-module");

try {
  console.log("trying to divide by 0");
  const result = firstModule.divide(0, 10);
  console.log("result-->", result);
} catch (err) {
  console.log("err-->", err.message);
}
