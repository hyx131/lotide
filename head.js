const assertEqual = require("./assertEqual");

const head = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length >= 1) {
      return arr[0]; 
    } else {
      return undefined; 
    }
  }
}; 


module.exports = head;