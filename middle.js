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

const middle = function(array) {
  let stuckInTheMiddle = []; //declare new array to push middle numbers to
  let theMiddle; //declares an empty variable to hold our middle numbers to perform operations on
  if (array.length < 3) { //if array has less than three items
    return stuckInTheMiddle; //return empty array
  } else if (array.length % 2 === 0) { //if array is even
    theMiddle = Math.floor(array.length / 2); //theMiddle is now equal to the result of the math operations //Math.floor is used here to provide a round number as just dividing array.length in half returns 3.5, if using the tests at the bottom here
    stuckInTheMiddle.push(array[theMiddle - 1], array[theMiddle]); //pushes the result of above minus one, and the result of above, thus pushing the two middle numbers to the empty array of stuckInTheMiddle
  } else if (array.length % 2 !== 0) {
    theMiddle = Math.floor(array.length / 2); //makes theMiddle equal to the exact middle index
    stuckInTheMiddle.push(array[theMiddle]); //pushes theMiddle to stuckInTheMiddle
  }
  return stuckInTheMiddle; //returns the array of middle numbers
};
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
// if array has less than 3 items then it returns empty
//if array length is even then return two middle elements
//if odd then return exact middle element