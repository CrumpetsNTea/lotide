const _ = require('../index'); //import head

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [3, 6, 9, 12];

const results1 = _.map(words, word => word[0]);
const results2 = _.map(words, word => word[1]);
const results3 = _.map(numbers, number => number * 4);
const results4 = _.map(words, word => "yes");

_.assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]); //should pass
_.assertArraysEqual(results2, [ 'g', 'c', 't', 'm', 't' ]); // should fail
_.assertArraysEqual(results2, [ 'r', 'o', 'o', 'a', 'o' ]);// should pass
_.assertArraysEqual(results3, [ 12, 24, 36, 48 ]); //should pass
_.assertArraysEqual(results4, [ 'yes', 'yes', 'yes', 'yes', 'yes' ]); //should pass
