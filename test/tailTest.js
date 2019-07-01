const assertEqual = require("../assertEqual");
const tail = require("../tail");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const result = tail([]);
assertEqual(result.length, 0);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");