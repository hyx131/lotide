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

const letterPositions = function(sentence) {
  const results = {};
  let index = 0;
  
  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(index);
      } else {
        results[letter] = [index];
      }
    }
    index += 1;
  }

  return results;
};


console.log(letterPositions("lighthouse in the house"));
// {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22]
// }

assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);