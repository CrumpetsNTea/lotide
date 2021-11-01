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
  return count;
};

console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;