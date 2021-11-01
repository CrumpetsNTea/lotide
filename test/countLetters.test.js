const _ = require('../index');
const { assert } = require('chai');
const chai = require('chai');
chai.should();
const expect = chai.expect;


describe("countLetters function", () => {

  it("returns occurence count of each letter when input a string", () => {
    assert.deepEqual(_.countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
  });
});