// takes a string
// returns where the letter shows up in the string

const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") { // if it is not a space then continue
      if (results[sentence[i]]) { //if results already contains a position for sentence[i]
        results[sentence[i]].push(i); //push the index position of index[i] to the key pair
      } else {
        results[sentence[i]] = [i]; //if it doesn't already exist in results, then add it
      }
    }
  }
  return results;
};
module.exports = letterPositions;