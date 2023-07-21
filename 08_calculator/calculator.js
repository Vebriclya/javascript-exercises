const add = function (num1, num2) {
  num1 += num2;
  return num1;
};

const subtract = function (num1, num2) {
  num1 -= num2;
  return num1;
};

const sum = function (enteredArray) {
  let result = 0;

  enteredArray.forEach((arrayElement) => {
    result += arrayElement;
  });

  return result;
};

const multiply = function (num1, ...suppliedNumbers) {
  let result = num1;

  suppliedNumbers.forEach((arrayElement) => {
    result *= arrayElement;
  });

  return result;
};

const power = function (num1, num2) {
  // number by itself as many times as the second number
  let result = Math.pow(num1, num2);

  return result;
};

const factorial = function (enteredNum) {
  // Lmao I had no idea what factorial was
  // It's multiplying every number from our chosen number down to 1
  let numArray = [];

  for (let i = enteredNum; i > 0; i--) {
    numArray.push(i);
  }

  numArray.forEach((factor) => {
    enteredNum *= factor;
  });

  return enteredNum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
