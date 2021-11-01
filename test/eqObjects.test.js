const _ = require('../index');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const bac = { b: "5", a: "7", c: "9"};
const cab = { b: "4", a: "7", c: "9"};
_.assertEqual(_.eqObjects(ab, ba), true); // => PASS true === true (lengths are same and key values are same)
_.assertEqual(_.eqObjects(ab, abc), false); // PASS false === false (because lengths are different)
_.assertEqual(_.eqObjects(bac, abc), false); // => PASS false === false (lengths are the same so it will continue - keys are not same so will fail)
_.assertEqual(_.eqObjects(bac, cab), true); // =>  FAIL false !== true (lengths are same but key values are not)

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
_.assertEqual(_.eqObjects(cd, dc), true); // => PASS (arrays are equal)
const cd2 = { c: "1", d: ["2", 3, 4] };
_.assertEqual(_.eqObjects(cd, cd2),false); // => PASS (arrays are not equal)
_.assertEqual(_.eqObjects(cd, cd2), true); // => FAIL (arrays are not equal)

