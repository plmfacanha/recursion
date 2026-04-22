const isObject = (val) => typeof val === "object" && val !== null;

const totalIntegers = (data) => {
  let count = 0;

  if (!isObject(data)) {
    return;
  }

  const objValues = Object.values(data);

  for (const val of objValues) {
    if (Number.isInteger(val)) {
      ++count;
    } else if (isObject(val)) {
      count += totalIntegers(val);
    }
  }

  return count;
};

console.log(totalIntegers([[5], 3, [10, 20], 10])); // returns 5
console.log(totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]])); // returns 7
console.log(totalIntegers({ a: 1, b: { a: [5, 10], b: 11 } })); // returns 4
