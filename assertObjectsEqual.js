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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const val of Object.keys(object1)) {
    if (Array.isArray(object1[val]) && Array.isArray(object2[val])) {
      return eqArrays(object1[val], object2[val]);
    }
    if (object1[val] !== object2[val]) {
      return false;
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) { //uses the eqArrays function to compare these two arrays
    console.log(`🎉 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`); //console.logs happy message if they are identical
  } else { //if they are not exact
    console.log(`🙈 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`); //console.logs sad message
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };


const cd2 = { c: "1", d: ["2", 3, 4] };


assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);