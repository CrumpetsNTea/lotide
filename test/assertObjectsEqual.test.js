const _ = require('./index');

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

_.assertObjectsEqual(cd, dc); // => PASS (objects are the same)
_.assertObjectsEqual(cd, cd2); // => FAIL (objects are not the same)