const { test, expect } = require("@jest/globals");
const sumScore = require("./index.js");

test("123 to be 6", () => {
  expect(sumScore([1, "2", 3])).toBe(6);
});

test("52CD+ to be 6", () => {
  expect(sumScore([5, 2, "C", "D", "+"])).toBe(30);
});
