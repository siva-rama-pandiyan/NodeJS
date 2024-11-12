const path = require("path");

console.log("Directory Name:", path.dirname(__filename));

console.log("File name:", path.basename(__filename));

console.log("File extension", path.extname(__filename));

const joinPath = path.join("siva", "nodejs", "path");
console.log("joinpath-->", joinPath);

const resolvePath = path.resolve("siva", "nodejs", "path");
console.log("Resolve Path:", resolvePath);

const normalizePath = path.normalize("/user/.downloads/../node/project");
console.log("Normalize Path-->", normalizePath);
