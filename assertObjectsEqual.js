const eqArrays = function(arr1, arr2) {
  let longestArr = 0;

  if (arr1.length < arr2.length) {
    longestArr = arr2.length;
  } else {
    longestArr = arr1.length;
  }

  for (let i = 0; i < longestArr; i++) {
    while (arr1[i] !== arr2[i]) {
      return false; 
    }
  }
  return true;
};


const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length === keys2.length) {
    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        if (Array.isArray(object1[key]) && Array.isArray(object1[key]) && eqArrays(object1[key], object2[key])) {
          return true;
        }
        return false; 
      } 
    }
    return true;
  }
  return false;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true
// assertEqual(eqObjects(ab, ba), true);
assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" });

const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false
// assertEqual(eqObjects(ab, abc), false);
assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" });

const dc = { d: ["2", 3], c: "1" };
const cd = { c: "1", d: ["2", 3] };
// eqObjects(cd, dc); // => true
// assertEqual(eqObjects(dc, cd), true);
assertObjectsEqual({ d: ["2", 3], c: "1" }, { c: "1", d: ["2", 3] });

const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false
// assertEqual(eqObjects(cd, cd2), false);
assertObjectsEqual({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] });

