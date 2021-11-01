const tail = (actual) => {
  let newArr = actual.slice(1); //creates a new array with the first item from passed in array removed
  console.log(newArr); //returns new array
};

module.exports = tail; //make this function exportable