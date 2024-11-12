const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("Data folder created!");
}

const filePath = path.join(dataFolder, "example.txt");

//sync way of creating the file
fs.writeFileSync(filePath, "Hello from node js");

console.log("File created successfully");

const readContentFromFile = fs.readFileSync(filePath, "utf-8");

console.log("File content->", readContentFromFile);

fs.appendFileSync(filePath, "\n New line added to file");

console.log("New file content added");

//async way

const asynFilePath = path.join(dataFolder, "async-example.txt");
fs.writeFile(asynFilePath, "Hello async node js", (err) => {
  if (err) throw err;
  console.log("Async file is created successfully");

  fs.readFile(asynFilePath, "utf-8", (err, data) => {
    if (err) throw err;
    console.log("Async file content:", data);
    fs.appendFile(asynFilePath, "\n This is new line content", (err) => {
      if (err) throw err;
      console.log("New lines are added");
    });
  });
});

// Make directory
// Create file
// Write content inside file(sync)
// read file content (sync)
// Update file content (sync)
// Write content inside file(async)
// read file content (async)
// Update file content (async)
