const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Lighthouse Labs");//Should pass
assertEqual("Lighthouse Labs", "Bootcamp"); //Should fail
assertEqual(1, 1); //Should pass
assertEqual(1, 3); //Should fail
