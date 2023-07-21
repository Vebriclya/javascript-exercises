const sumAll = function (firstNumber, secondNumber) {
  let numbersToAdd = [];

  for (let i = firstNumber; i <= secondNumber; i++) {
    numbersToAdd.push(i);
  }

  let result = 0;
  numbersToAdd.forEach((item) => {
    result += item;
  });

  return result;
};

// Do not edit below this line
module.exports = sumAll;
