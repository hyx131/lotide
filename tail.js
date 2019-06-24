const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let arrTail = arr.slice(1);
  return arrTail;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const result = tail([]);
assertEqual(result.length, 0);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");