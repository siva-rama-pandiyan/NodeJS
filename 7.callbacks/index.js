const fs = require("fs");

const person = (name, cb) => {
  console.log(`Hello ${name}`);
  cb();
};

const address = () => {
  console.log("i amd from address");
};

person("Siva", address);

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) console.log("Error from reading file", err);
  console.log(data);
});
