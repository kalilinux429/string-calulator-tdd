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