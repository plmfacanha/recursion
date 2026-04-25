const fibs = (num) => {
  if (!Number.isInteger(num) || num < 0) {
    return;
  }

  let arr = [];
  let sum = 0;
  let curr = 1;
  let prev = 0;

  if (num === 0) {
    return [num];
  }

  if (num === 1) {
    return [prev, num];
  }

  for (let i = 0; i <= num; ++i) {
    arr.push(prev);
    sum = prev + curr;
    prev = curr;
    curr = sum;
  }

  return arr;
};

const fibsRecursively = (num) => {
  console.log("This was printed recursively!");

  if (!Number.isInteger(num) || num < 0) {
    return;
  }

  if (num === 0) {
    return [0];
  }

  if (num === 1) {
    return [0, 1];
  }

  let sum = 0;
  let curr;
  let prev;

  const arr = fibsRecursively(num - 1);

  prev = arr[arr.length - 2];
  curr = arr[arr.length - 1];
  sum = prev + curr;
  arr.push(sum);

  return arr;
};

// console.log(fibs(0)); // [0];
// console.log(fibs(1)); // [0,1];
// console.log(fibs(2)); // [0,1,1];
// console.log(fibs(3)); // [0,1,1,2];
// console.log(fibs(4)); // [0,1,1,2,3];
// console.log(fibs(5)); // [0,1,1,2,3,5];
// console.log(fibs(6)); // [0,1,1,2,3,5,8];

// console.log(fibsRecursively(0)); // [0]
// console.log(fibsRecursively(1)); // [0, 1]
// console.log(fibsRecursively(2)); // [0, 1, 1]
// console.log(fibsRecursively(3)); // [0, 1, 1, 2]
// console.log(fibsRecursively(4)); // [0, 1, 1, 2, 3]
// console.log(fibsRecursively(5)); // [0, 1, 1, 2, 3, 5]
// console.log(fibsRecursively(6)); // [0, 1, 1, 2, 3, 5, 8]
fibsRecursively(8); // [0, 1, 1, 2, 3, 5, 8]
