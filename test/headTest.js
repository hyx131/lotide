// const assertEqual = require("../assertEqual");
// const head = require("../head");

// assertEqual(head([]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([5, 4, 6]), 5); 


const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(["5"]), '5'); 
  });

  it(`returns "Hello" for ["hello", Lighthouse", "Labs"]`, () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it (`returns false for empty array []`, () => {
    assert.isUndefined(head([]), 5);
  });
});