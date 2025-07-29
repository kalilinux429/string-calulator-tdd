function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const delimiterStr = escapeRegex(parts[0].slice(2));
    delimiter = new RegExp(delimiterStr);
    numbers = parts[1];
  }

  const parts = numbers.split(delimiter);
  const nums = parts.map(Number);

  const negatives = nums.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
  }

  return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
