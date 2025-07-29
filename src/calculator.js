function add(numbers) {
     numbers = String(numbers);
 if (!numbers) return 0;

 const parts = numbers.split(",");
  if (parts.length === 1) return Number(parts[0]);

  const nums = parts.map(Number);
  return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
