const delay = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

console.log("Promise initiated");
delay(2000).then(() => console.log("after 2 seconds promise resolved"));
console.log("All done");

const divide = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (num2 === 0) reject("Can not perform division by 0");
    else resolve(num1 / num2);
  });
};

divide(10, 0)
  .then((result) => console.log("result-->", result))
  .catch((err) => console.log(err));
