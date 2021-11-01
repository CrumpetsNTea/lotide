const _ = require('../index');
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

const result1 = _.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false}); //sees if there are Jasons, if there are Karima, if there are Fang, and if there are not Agouhanna

_.assertEqualassertEqual(result1["Jason"], 1); //checks if there is 1 jason
_.assertEqualassertEqual(result1["Karima"], undefined); //checks if there are no Karima
_.assertEqualassertEqual(result1["Fang"], 2); //checks if there are 2 fang
_.assertEqualassertEqual(result1["Agouhanna"], undefined); //checks if there are no Agouhanna which returns undefined because there is Agouhanna?

//should report back how many instances of each string were found in the allItems array