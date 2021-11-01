const middle = require('../middle'); //import middle
const assertArraysEqual = require('../assertArraysEqual'); //import assertArraysEqual

//Test
assertArraysEqual(middle([1]), []); // => PASS array has less than three items so empty array is returned and equal to empty array
assertArraysEqual(middle([1, 2, 3]), [2]); //PASS the first array after middle is called on it is now 2 whi
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // PASS gets three as the middle
assertArraysEqual(middle([1, 2, 3, 4]), [2]); //Should fail because middle will be equal to [2, 3]

// if array has less than 3 items then it returns empty
//if array length is even then return two middle elements
//if odd then return exact middle element