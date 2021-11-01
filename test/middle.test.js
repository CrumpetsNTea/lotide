const _ = require('../index');
const chai = require('chai');
const assert = chai.assert;

//Test
describe("middle function", () => {
  it("should return an empty array when passed an array with less than three items", () => {
    assert.deepEqual(_.middle([1]), []);
  });
  it("should return 2 when passed array [1, 2, 3]", () => {
    assert.deepEqual(_.middle([1,2,3]), [2]);
  });
  it("should return 3 when passed array [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5]), [3]);
  });
  it("should return 2, 3 when passed an array with an even amount of indexes [1, 2, 3, 4]", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4]) [2, 3]);
  });
});

// // if array has less than 3 items then it returns empty
//if array length is even then return two middle elements
//if odd then return exact middle element
