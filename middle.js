const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    while (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed`);
  } else {
    console.log(`❌ Assertion Failed`);
  }
};

const middle = function(arr) {
  let output = [];
  if (arr.length > 2) {
    if (arr.length % 2 !== 0) {
      let i = Math.floor(arr.length / 2);
      output.push(arr[i]);
    } else {
      output.push(arr[arr.length / 2 - 1]);
      output.push(arr[arr.length / 2]);
    }
  }
  return output;
};

// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []

// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]

// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);