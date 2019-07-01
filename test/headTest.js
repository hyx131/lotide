const assertEqual = require("../assertEqual");
const head = require("../head");

assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5, 4, 6]), 5); 