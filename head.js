const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length >= 1) {
      return arr[0]; 
    } else {
      return undefined; 
    }
  }
}; 


assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

console.log(head([5, 4, 6])); 