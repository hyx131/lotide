// const eqArrays = function(arr1, arr2) {
//   let longestArr = 0;

//   if (arr1.length < arr2.length) {
//     longestArr = arr2.length;
//   } else {
//     longestArr = arr1.length;
//   }

//   for (let i = 0; i < longestArr; i++) {
//     while (arr1[i] !== arr2[i]) {
//       return false; 
//     }
//   }
//   return true;
// };

const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;


