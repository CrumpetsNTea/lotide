const middle = require('../middle'); //import middle
const chai = require('chai');
const assert = chai.assert;

//Test
describe("middle function", () => {
  it("should return an empty array when passed an array with less than three items", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("should return 2 when passed array [1, 2, 3]", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
});
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // PASS gets three as the middle
// assertArraysEqual(middle([1, 2, 3, 4]), [2]); //Should fail because middle will be equal to [2, 3]

// // if array has less than 3 items then it returns empty
//if array length is even then return two middle elements
//if odd then return exact middle element
