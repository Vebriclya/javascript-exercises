const sumAll = function (firstNumber, secondNumber) {
  let numbersToAdd = [];
  let largerNumber;
  let smallerNumber;
  let result;

  if (typeof firstNumber != "number" || typeof secondNumber != "number") {
    result = "ERROR";
  }

  if (result != "ERROR") {
    if (firstNumber < 0 || secondNumber < 0) {
      result = "ERROR";
    } else if (firstNumber > secondNumber) {
      largerNumber = firstNumber;
      smallerNumber = secondNumber;
    } else if (firstNumber < secondNumber) {
      smallerNumber = firstNumber;
      largerNumber = secondNumber;
    }

    if (result != "ERROR") {
      for (let i = smallerNumber; i <= largerNumber; i++) {
        numbersToAdd.push(i);
      }

      result = 0;
      numbersToAdd.forEach((item) => {
        result += item;
      });
    }
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
