function countdown(number) {
  if (number <= 0) return [0];

  const result = countdown(number - 1);
  result.unshift(number);

  return result;
}

function getSum(numbers) {
  if (numbers.length === 0) return null;
  if (numbers.length === 1) return numbers[0];

  return numbers[0] + getSum(numbers.slice(1));
}

function factorial(number) {
  if (number <= 1) return 1;

  return factorial(number - 1) * number;
}

function reverse(string) {
  if (string.length <= 1) return string;

  return reverse(string.slice(1)) + string[0];
}

function power(base, exponent) {
  if (exponent === 0) return 1;

  return power(base, exponent - 1) * base;
}

function isPalindrome(string) {
  if (string.length <= 1) return true;

  const matchingEdges = string[0] === string.slice(-1);

  return isPalindrome(string.slice(1, -1)) && matchingEdges;
}

function upcase(string) {
  if (string.length <= 1) return string.toUpperCase();

  return string[0].toUpperCase() + upcase(string.slice(1));
}

function sumOfDigits(number) {
  if (number < 0) return null;
  if (number <= 1) return number;

  return sumOfDigits(number - 1) + number;
}

function inStock(inventory, item) {
  if (inventory.length === 0) return false;
  if (inventory[0] === item) return true;

  return inStock(inventory.slice(1), item);
}

function findMax(numbers) {
  if (numbers.length === 0) return null;
  if (numbers.length === 1) return numbers[0];

  const max = findMax(numbers.slice(1));

  return max > numbers[0] ? max : numbers[0];
}

function numberOfZeroes(numbers) {
  if (numbers.length === 0) return 0;

  const count = numbers[0] === 0 ? 1 : 0;

  return numberOfZeroes(numbers.slice(1)) + count;
}

function justPositives(numbers) {
  if (numbers.length === 0) return 0;

  const num = numbers[0] > 0 ? numbers[0] : 0;

  return justPositives(numbers.slice(1)) + num;
}

function numberOfOccurrences(elements, target) {
  if (elements.length === 0) return 0;

  const count = elements[0] === target ? 1 : 0;

  return numberOfOccurrences(elements.slice(1), target) + count;
}

function fibonacci(number) {
  if (number <= 1) return number;

  return fibonacci(number - 2) + fibonacci(number - 1);
}

module.exports = {
  countdown,
  getSum,
  factorial,
  reverse,
  power,
  isPalindrome,
  upcase,
  sumOfDigits,
  inStock,
  findMax,
  numberOfZeroes,
  justPositives,
  numberOfOccurrences,
  fibonacci,
};
