const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🙈 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  for (let val of array1) {
    for (let val1 of array2) {//loop through both the arrays
      if (val !== val1 || array1.length !== array2.length) { //if indexes of the arrays do not match or the lengths do not match
        return false; //return false
      } else if (array1.length === array2.length && val === val1) { //if both length and indexes match
        return true; //returns true
      }
    }
  }
};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS because true === true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS because false === false