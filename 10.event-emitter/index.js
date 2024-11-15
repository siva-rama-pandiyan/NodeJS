const EventEmitter = require("events");

const myFirstEmitter = new EventEmitter();

//register
myFirstEmitter.on("greet", (name) => {
  console.log(`Hello ${name}`);
});

myFirstEmitter.emit("greet", "Siva");
