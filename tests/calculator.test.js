const { add } = require('../src/calculator');
test('returns 0 for an empty string', () => {
  const result = add("");
  console.log("Manual Result:", result);
   // ✅ log output
  expect(result).toBe(0);                
});

 test('returns the number itself when input is a single number', () => {
  const result = add("5");
  expect(result).toBe(5);
});

test('returns the sum of two numbers separated by comma', () => {
  const result = add("3,7");
  expect(result).toBe(10);
});


test('returns correct sum when newline and comma are mixed as delimiters', () => {
  const result = add("1\n2,3");
  expect(result).toBe(6);
});


//custom delimiter

test('supports custom delimiter ";"', () => {
  const result = add("//;\n1;2");
  expect(result).toBe(3);
});

test('supports custom delimiter "|"', () => {
  const result = add("//|\n4|5|6");
  expect(result).toBe(15);
});


test('throws error if one negative number is present', () => {
  expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
});

test('throws error if multiple negative numbers are present', () => {
  expect(() => add("-1,-4,3")).toThrow("negative numbers not allowed: -1, -4");
});
