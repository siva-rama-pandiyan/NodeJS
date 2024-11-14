const delay = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const delayedGreet = async (name) => {
  await delay(2000);
  console.log(name);
};

delayedGreet("siva");

const division = async (num1, num2) => {
  try {
    if (num2 === 0) throw new Error("Can not divide by 0");
    return num1 / num2;
  } catch (err) {
    console.log("Error from catch", err);
  }
};

const mainFn = async () => {
  console.log(await division(10, 2));
  console.log(await division(10, 0));
};

mainFn();
