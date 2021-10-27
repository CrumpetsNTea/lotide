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
  let stuckInTheMiddle = [];
  let theMiddle;
  if (array.length < 3) {
    return stuckInTheMiddle;
  } else if (array.length % 2 === 0) {
    theMiddle = Math.floor(array.length / 2);
    stuckInTheMiddle.push(array[theMiddle - 1], array[theMiddle]);
  }
  return stuckInTheMiddle;
};
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3, 4])); // => [2, 3]

// if array has less than 3 items then it returns empty
//if array length is even then return two middle elements
//so middle index would be (array.length divided by 2) - 1

//if odd then return exact middle element
// which would be array length - 1 (makiing it even) then divided by 2