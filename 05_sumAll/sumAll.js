const sumAll = function (firstNumber, secondNumber) {
  let numbersToAdd = [];
  let largerNumber;
  let smallerNumber;

  if (firstNumber > secondNumber) {
    largerNumber = firstNumber;
    smallerNumber = secondNumber;
  } else {
    firstNumber = smallerNumber;
    secondNumber = largerNumber;
  }

  for (let i = smallerNumber; i <= largerNumber; i++) {
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
