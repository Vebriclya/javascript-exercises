const fibonacci = function (enteredNumber) {
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
  return fibonacciArray[enteredNumber];
};

// Do not edit below this line
module.exports = fibonacci;
