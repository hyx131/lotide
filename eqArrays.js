const assertEqual = require("./assertEqual");

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
          if(!eqArrays(arr1[i], arr2[i])) {
            return false;
          }
        } else {
          return false; 
        } 
      }
    }
  return true;
};

// const eqArrays = function(arr1, arr2) {
//   console.log(arr1, arr2);
//   if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) {
//         if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
//           if(!eqArrays(arr1[i], arr2[i])) {
//             return false;
//           }
//         } 
//         return false;
        
//       }
//     }
//     return true;
//   } 
  
//   return false;
// };


assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1], [1]), true);
assertEqual(eqArrays([1], []), false);
assertEqual(eqArrays([1, 2], [1, 2]), true);
assertEqual(eqArrays([1, 2, 4], [1, 2, 4]), true);
assertEqual(eqArrays([[1]], [[1]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false

module.exports = eqArrays;
