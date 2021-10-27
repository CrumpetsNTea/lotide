const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) { //checks array length first if they are the same then code continues
    return false;
  }
  for (let i = 0; i < array1.length; i++) { //loops through array
    if (array1[i] !== array2[i]) { //if indexes of the arrays do not match
      return false; //return false
    }
  }
  return true; //if it passes above tests, then returns true because the arrays are the same
};

let assertArraysEqual = function(array1, array2) { //takes two arrays
  if (eqArrays(array1,array2)) { //uses the eqArrays function to compare these two arrays
    console.log(`🎉 Assertion Passed: ${array1} === ${array2}`); //console.logs happy message if they are identical
  } else { //if they are not exact
    console.log(`🙈 Assertion Failed: ${array1} !== ${array2}`); //console.logs sad message
  }
};

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

//Test code
assertArraysEqual((without([1, 2, 3], [1])), [2, 3]); // => PASS 2,3 === 2,3
assertArraysEqual((without([1, 2, "3"], [1])), [2, 3]); // => FAIL 2,"3" !== 2,3
assertArraysEqual((without([1, 2, "3"], ["3"])), [1, 2]); // => PASS 1,2 === 1,2
assertArraysEqual((without([1, 2, 3], [2])), [2, 3]); // => FAIL 1,3 === 2,3

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // was not altered because hello,world !== hello,world,lighthouse