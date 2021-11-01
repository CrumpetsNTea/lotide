const middle = (array) => {
  let stuckInTheMiddle = []; //declare new array to push middle numbers to
  let theMiddle; //declares an empty variable to hold our middle numbers to perform operations on
  if (array.length < 3) { //if array has less than three items
    return stuckInTheMiddle; //return empty array
  } else if (array.length % 2 === 0) { //if array is even
    theMiddle = Math.floor(array.length / 2); //theMiddle is now equal to the result of the math operations //Math.floor is used here to provide a round number as just dividing array.length in half returns 3.5, if using the tests at the bottom here
    stuckInTheMiddle.push(array[theMiddle - 1], array[theMiddle]); //pushes the result of above minus one, and the result of above, thus pushing the two middle numbers to the empty array of stuckInTheMiddle
  } else if (array.length % 2 !== 0) {
    theMiddle = Math.floor(array.length / 2); //makes theMiddle equal to the exact middle index
    stuckInTheMiddle.push(array[theMiddle]); //pushes theMiddle to stuckInTheMiddle
  }
  return stuckInTheMiddle; //returns the array of middle numbers
};

// if array has less than 3 items then it returns empty
//if array length is even then return two middle elements
//if odd then return exact middle element

module.exports = middle; //makes middle exportable

