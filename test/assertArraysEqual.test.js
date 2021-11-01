const _ = require('../index');

//Test
_.assertArraysEqual([1, 2, 3], [1, 2, 3]); // => Passes because 1,2,3 === 1,2,3
_.assertArraysEqual([1, 2, 3], [1, 2, 4]); // => Fails because they are different