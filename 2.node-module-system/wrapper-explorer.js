console.log("Node module wrapper demo");

console.log("__fileName in wrapper explorer", __filename);
console.log("__dirName in wrapper explorer", __dirname);

module.exports.greet = (name) => {
  console.log(`Hello ${name}`);
};
