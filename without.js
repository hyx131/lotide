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

const without = function(sourceArr, removeArr) {
  let output = [];
  for (let i = 0; i < sourceArr.length; i++) {
    if (!removeArr.includes(sourceArr[i])) {
      output.push(sourceArr[i]);
    }
  }
  return output;
};


// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);