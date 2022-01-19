const { test, expect } = require("@jest/globals");
const closingBrackets = require("./index.js");

test("(} to be false", () => {
  expect(closingBrackets("(}")).toBe(false);
});

test("(){}[] to be true", () => {
  expect(closingBrackets("(){}[]")).toBe(true);
});

test("({)} to be false", () => {
  expect(closingBrackets("({)}")).toBe(false);
});
