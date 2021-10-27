const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) { //checks array length first if they are the same then code continues
    return false;
  }
  for (let i = 0; i < array1.length; i++) { //loops through array
    if (array1[i] !== array2[i]) { //if indexes of the arrays do not match
      return false; //return false
    }
  }
  return true; //if it passes above tests, then returns true because the arrays are the same
};

let assertArraysEqual = function(array1, array2) { //takes two arrays
  if (eqArrays(array1, array2)) { //uses the eqArrays function to compare these two arrays
    console.log(`🎉 Assertion Passed: ${array1} === ${array2}`); //console.logs happy message if they are identical
  } else { //if they are not exact
    console.log(`🙈 Assertion Failed: ${array1} !== ${array2}`); //console.logs sad message
  }
};


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
  console.log(results);
};

letterPositions("hello");
letterPositions("llama labratory");
letterPositions("lighthouse is funky");