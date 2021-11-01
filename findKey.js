const findKey = (object, callback) => {
  for (let key in object) { //loop through object
    if (callback(object[key])) { //if the item in the object fulfills the callback requirements (returns true) - which are defined as anonymous arrow functions
      return key; //return key which in turn stops the loop
    }
  }
  return undefined; //if callback requirements are not met (callback returns false) then return undefined
};

module.exports = findKey;