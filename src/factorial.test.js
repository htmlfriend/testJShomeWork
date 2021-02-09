const factorial = require("./factorial");

test("1! = 1", () => {
  const n = 1;
  expect(factorial(n)).toBe(1);
});

test("2! = 2", () => {
  expect(factorial(2)).toBe(2);
});

test("4! = 24", () => {
  expect(factorial(4)).toBe(24);
});

test("0! = 1", () => {
  expect(factorial(0)).toBe(1);
});
