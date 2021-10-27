const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🙈 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const countLetters = function(sentence) {
  let count = {};
  for (const letter of sentence) {
    if (count[letter]) {
      count[letter] += 1;
    } else if (letter === " ") {
      count[letter] - " ";
    } else {
      count[letter] = 1;
    }
  }
  console.log(count);
};

countLetters("lighthouse in the house");
