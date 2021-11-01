const head = require('../head'); //import head
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

describe("head function", () => {
  it("should return 1 for [1,2,3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("should return 5 for [5, 6, 7]", () => {
    const result = head([5, 6, 7]);
    expect(result).to.deep.equal(5); //messed around with a different way of writing a test
  });
  it("should not return 6 for [5, 6, 7]", () => {
    const result = head([5, 6, 7]);
    expect(result).to.not.deep.equal(6); //messed around with a different way of writing a test
  });
  it("should return Hello when passed array with Hello at [0]", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it("should recognize empty array as undefined", () => {
    assert.strictEqual(head([]), undefined);
  });
  it("should return 5 when passed array with only 5 in it", () => {
    assert.strictEqual(head([5]), 5);
  });
});
