//Instructions:

//This function should take in a source array and a itemsToRemove array.
//It should return a new array with only those elements from source
//that are not present in the itemsToRemove array.

let without = function(source, itemsToRemove) {
  let editedArray = source; //the new array intiially equals the source array
  // we need to loop through the arrays
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) { //if [j] is equal to [i] - meaning it has been selected for removal
        editedArray.splice([i], 1); //removes one element, located at the matching index item of source
      }
    }
  }
  return editedArray; //returns new array with removals
};

module.exports = without;