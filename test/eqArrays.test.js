const _ = require('../index');
//Test
_.assertEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS because true === true
_.assertEqual(_.eqArrays([1, 2, 3], [1, 2, 5]), false); // => should PASS because false === false
_.assertEqual(_.eqArrays([1, 2, 3], [1, 2, 5]), true); // => should Fail because true !== false (arrays are not equal)