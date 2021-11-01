const _ = require('./index');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (_.eqObjects(actual, expected)) { //uses the eqArrays function to compare these two arrays
    console.log(`🎉 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`); //console.logs happy message if they are identical
  } else { //if they are not exact
    console.log(`🙈 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`); //console.logs sad message
  }
};

module.exports = assertObjectsEqual;