const factorial = (num) => {
  if (!Number.isInteger(num) || num < 0) {
    return;
  }

  if (num == 0 || num == 1) {
    return 1;
  }

  return num * factorial(num - 1);
};

console.log(factorial(5)); // Output 5 * 4 * 3 * 2 * 1 = 120
