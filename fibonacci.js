const fibonacci = (num) => {
  if (!Number.isInteger(num) || num < 0) {
    return;
  }

  if (num === 0) {
    return 0;
  }

  if (num === 1 || num === 2) {
    return 1;
  }
};

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
