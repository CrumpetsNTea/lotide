const { assert } = require('chai');
const _ = require('../index');



describe("countLetters function", () => {

  it("should return 20 when input a string of 20 letters", () => {
    assert.strictEqual(_.countLetters("lighthouse in the house"), 20);
  });
});