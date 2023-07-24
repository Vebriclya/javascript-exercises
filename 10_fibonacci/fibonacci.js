const fibonacci = function (enteredNumber) {
  //Create a function that returns a specific member of the Fibonacci sequence
  //A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

  // take a number
  // make a loop, for as long as the i of that loop is < the entered number
  // run fibonnaci sequence
  // each loop add a number to the array
  // number in array = previous two numbers in array added to each other
  // i + array at index i+1

  let fibonacciArray = [1, 1, 2, 3, 5, 8];

  for (
    let arrayPosition1 = 0;
    arrayPosition1 < enteredNumber;
    arrayPosition1++
  ) {
    let arrayPosition2 = 1;
    arrayPosition1 + arrayPosition2;

    arrayPosition2++;
  }

  return fibonacciArray[enteredNumber];
};

// Do not edit below this line
module.exports = fibonacci;
