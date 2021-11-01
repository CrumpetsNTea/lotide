const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5,6,7]), 5); //Should pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //Should pass
assertEqual(head([]), 5); //Should fail
assertEqual(head([5]), 5); //Should pass