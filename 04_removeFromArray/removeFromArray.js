const removeFromArray = function(enteredArray = [], firstItemToRemove, secondItemToRemove = "") {

    let firstItemPosition = enteredArray.indexOf(firstItemToRemove);
    let secondItemPosition = enteredArray.indexOf(secondItemToRemove);

    enteredArray.splice(firstItemPosition, 1);
    if(secondItemToRemove != ""){
        enteredArray.splice(secondItemPosition, 1);
    }

    return enteredArray;

};

// Do not edit below this line
module.exports = removeFromArray;
