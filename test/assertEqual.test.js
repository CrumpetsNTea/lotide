const assertEqual = require('../assertEqual'); //Import assert equal function

//Test
assertEqual("Lighthouse Labs", "Lighthouse Labs");//Should pass
assertEqual("Lighthouse Labs", "Bootcamp"); //Should fail
assertEqual(1, 1); //Should pass
assertEqual(1, 3); //Should fail
