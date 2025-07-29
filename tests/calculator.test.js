const { add } = require('../src/calculator');
test('returns 0 for an empty string', () => {
  const result = add("0");
  console.log("Manual Result:", result); // ✅ log output
  expect(result).toBe(0);                 // ✅ check correctness
});
