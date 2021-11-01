const _ = require('../index');

//Test
_.assertEqual("Lighthouse Labs", "Lighthouse Labs");//Should pass
_.assertEqual("Lighthouse Labs", "Bootcamp"); //Should fail
_.assertEqual(1, 1); //Should pass
_.assertEqual(1, 3); //Should fail