// const assert = require("chai").assert;
const assertObjectsEqual = require ("../index");



// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// // eqObjects(ab, ba); // => true
// // assertEqual(eqObjects(ab, ba), true);
// assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" });

// const abc = { a: "1", b: "2", c: "3" };
// // eqObjects(ab, abc); // => false
// // assertEqual(eqObjects(ab, abc), false);
// assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" });

// const dc = { d: ["2", 3], c: "1" };
// const cd = { c: "1", d: ["2", 3] };
// // eqObjects(cd, dc); // => true
// // assertEqual(eqObjects(dc, cd), true);
// assertObjectsEqual({ d: ["2", 3], c: "1" }, { c: "1", d: ["2", 3] });

// const cd2 = { c: "1", d: ["2", 3, 4] };
// // eqObjects(cd, cd2); // => false
// // assertEqual(eqObjects(cd, cd2), false);
// assertObjectsEqual({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] });