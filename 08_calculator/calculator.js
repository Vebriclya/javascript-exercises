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

const power = function () {};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
