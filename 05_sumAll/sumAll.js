const sumAll = function(firstNumber, secondNumber) {
    // count up from first number until it is less than the second number
    // store all those numbers in an array
    // add them all together

    let numbersToAdd = [];

    for(let i = firstNumber; i < secondNumber; i++){
        numbersToAdd.push(i);
    }

    return numbersToAdd;
};

// Do not edit below this line
module.exports = sumAll;
