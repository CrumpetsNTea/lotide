const chai = require('chai');
const assert = chai.assert;
const tail = require('../tail'); //import tail function
//Test
describe("tail function", () => {
  it("should return an empty array when passed an array with less than three items", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("should return [1, 2] when passed array [1, 2, 3]", () => {
    assert.deepEqual(tail([1,2,3]), [2, 3]);
  });
  it("should return [2, 3, 4, 5] when passed array [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });
  it("should return [Lighthouse, Labs] when passed array [Yo Yo, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});