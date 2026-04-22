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

  return fibonacci(num - 2) + fibonacci(num - 1);
};

const fibs = (num) => {
  if (!Number.isInteger(num) || num < 0) {
    return;
  }

  let arr = [0];

  for (let i = 1; i <= num; ++i) {
    const val = fibonacci(i);

    arr.push(val);
  }

  return arr;
};

// console.log(fibs(0)); // [0]
// console.log(fibs(1)); // [0, 1]
console.log(fibs(4)); // [0,1,1,2,3]
