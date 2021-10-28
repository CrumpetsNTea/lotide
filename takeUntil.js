const takeUntil = function(array, callback) {
  let results = []; //empty array to push reults into
  
  for (val of array) { //loop through array
    if (callback(val) === true) { //if the value of the array fulfills the callback function requirements
      return results; //then stop looping and return the array of items thus far
    }
    if (callback(val) === false) { //if the value of the array does not fulfill the callback requirements
      results.push(val); //push the value into the results array
    }
  }
  return results; //return results in the instance that callback(val) never equated to true
};

//The function will return a "slice of the array with elements taken from the beginning."
//It should keep going until the callback/predicate returns a truthy value.

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
