const assertEqual = require("./assertEqual");

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      while (arr1[i] !== arr2[i]) {
        return false; 
      }
    }
  }
  return true;
};

// const eqArrays = function(arr1, arr2) {
//   if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) {
//         if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
//           eqArrays(arr1[i], arr2[i]);
//         } else {
//           return false;
//         }
//       }
//       return true;
//     }
//   } 
  
//   return false;
// };


module.exports = eqArrays;