// const assertEqual = require("../assertEqual");
// const eqArrays = require("../eqArrays");
// const eqArrays = require("./index").eqArrays;
// const assertEqual = require("./index").assertEqual;


const assert = require("chai").assert;
const eqArrays = require("./index").eqArrays;

describe("#eqArrays", () => {
  it(`return true for [1, 2, 3] vs [1, 2, 3]`, () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]), true);
  })
});

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
// // assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false



// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false