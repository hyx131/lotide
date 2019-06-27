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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed`);
  } else {
    console.log(`❌ Assertion Failed`);
  }
};




const words = ["ground", "control", "to", "major", "tom"];

const map = function(arr, callback) {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};


//test cases:

const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

const results2 = map(words, word => word.toUpperCase());
console.log(results2);
assertArraysEqual(results2, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

const results3 = map(words, word => `${word} is found in the words array!`);
console.log(results3);
assertArraysEqual(results3, [ 'ground is found in the words array!', 'control is found in the words array!', 'to is found in the words array!', 'major is found in the words array!', 'tom is found in the words array!' ]);


