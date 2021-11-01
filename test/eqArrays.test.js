const assertEqual = require('../assertEqual'); //import assert equal
const eqArrays = require('../eqArrays');
//Test
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS because true === true
assertEqual(eqArrays([1, 2, 3], [1, 2, 5]), false); // => should PASS because false === false
assertEqual(eqArrays([1, 2, 3], [1, 2, 5]), true); // => should Fail because true !== false (arrays are not equal)
