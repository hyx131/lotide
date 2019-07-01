const eqArrays = require("./eqArrays");

const assertArraysEqual = require("./assertArraysEqual");

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

module.exports = middle;

