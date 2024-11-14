const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) console.log("Error from reading file");

  const modifyData = data.toUpperCase();
  fs.writeFile("output.txt", modifyData, (err) => {
    if (err) console.log("Error from reading file");
    console.log("Data written to the new file");
    fs.readFile("output.txt", "utf8", (err, data) => {
      if (err) console.log("Error from reading file");
      console.log("data-->", data);
    });
  });
});
