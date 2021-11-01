const assertArraysEqual = require('../assertArraysEqual.js');

//Test
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => Passes because 1,2,3 === 1,2,3
assertArraysEqual([1, 2, 3], [1, 2, 4]); // => Fails because they are different