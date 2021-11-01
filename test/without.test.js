const _ = require('../index'); //import head

//Test code
_.assertArraysEqual((_.without([1, 2, 3], [1])), [2, 3]); // => PASS 2,3 === 2,3
_.assertArraysEqual((_.without([1, 2, "3"], [1])), [2, 3]); // => FAIL 2,"3" !== 2,3
_.assertArraysEqual((_.without([1, 2, "3"], ["3"])), [1, 2]); // => PASS 1,2 === 1,2
_.assertArraysEqual((_.without([1, 2, 3], [2])), [2, 3]); // => FAIL 1,3 === 2,3

const words = ["hello", "world", "lighthouse"];
_.without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
_.assertArraysEqual(words, ["hello", "world", "lighthouse"]); // was not altered because hello,world !== hello,world,lighthouse
