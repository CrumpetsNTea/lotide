const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🙈 Assertion Failed: ${actual} !==  ${expected}`);
  }
};
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




/*const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const bac = { b: "5", a: "7", c: "9"};
const cab = { b: "4", a: "7", c: "9"};
assertEqual(eqObjects(ab, ba), true); // => PASS true === true (lengths are same and key values are same)
assertEqual(eqObjects(ab, abc), false); // PASS false === false (because lengths are different)
assertEqual(eqObjects(bac, abc), false); // => PASS false === false (lengths are the same so it will continue - keys are not same so will fail)
assertEqual(eqObjects(bac, cab), true); // =>  FAIL false !== true (lengths are same but key values are not)
*/

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => PASS (arrays are equal)
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => PASS (arrays are not equal)