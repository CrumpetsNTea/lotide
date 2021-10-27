const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🙈 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const val of Object.keys(object1))
    if (object1[val] !== object2[val]) {
      return false;
    }
  return true;
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const bac = { b: "5", a: "7", c: "9"};
const cab = { b: "4", a: "7", c: "9"};
assertEqual(eqObjects(ab, ba), true); // => PASS true === true (lengths are same and key values are same)
assertEqual(eqObjects(ab, abc), false); // PASS false === false (because lengths are different)
assertEqual(eqObjects(bac, abc), false); // => PASS false === false (lengths are the same so it will continue - keys are not same so will fail)
assertEqual(eqObjects(bac, abc), true); // =>  FAIL false !== true (lengths are same but key values are not)