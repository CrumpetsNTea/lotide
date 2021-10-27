const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🙈 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false}); //sees if there are Jasons, if there are Karima, if there are Fang, and if there are not Agouhanna

assertEqual(result1["Jason"], 1); //checks if there is 1 jason
assertEqual(result1["Karima"], undefined); //checks if there are no Karima
assertEqual(result1["Fang"], 2); //checks if there are 2 fang
assertEqual(result1["Agouhanna"], undefined); //checks if there are no Agouhanna which returns undefined because there is Agouhanna?

//should report back how many instances of each string were found in the allItems array
