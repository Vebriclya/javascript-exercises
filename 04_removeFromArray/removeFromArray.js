

const removeFromArray = function(enteredArray, ...itemToRemove) {
    
    typeof(itemToRemove);

    
    for(const arg of itemToRemove){
        let itemPosition = enteredArray.indexOf(arg);  
        if(itemPosition != -1){
            enteredArray.splice(itemPosition, 1);
        }
    }   


    return enteredArray;  // return the now modified array
};

// Do not edit below this line
module.exports = removeFromArray;
