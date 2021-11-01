const assertEqual = require('../assertEqual'); //import assert equal
const tail = require('../tail'); //import tail function
//Test
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); //creates a new array with Yo Yo removed
assertEqual(words.length, 3); //Ensures that origin array is not changed (still has 3 items)