const fibonacci = function (enteredNumber) {
  let result;

  if (enteredNumber < 0) {
    result = "OOPS";
  } else {
    let fibonacciArray = [1, 1];
    let position1 = 0;
    let position2 = 1;

    for (let i = 1; i < enteredNumber; i++) {
      let position3 = fibonacciArray[position1] + fibonacciArray[position2];
      fibonacciArray.push(position3);
      position1++;
      position2++;
    }

    enteredNumber -= 1;

    result = fibonacciArray[enteredNumber];
  }

  return result;
};

// Do not edit below this line
module.exports = fibonacci;
