const isObject = (val) => typeof val === "object" && val !== null;

const contains = function (object, searchValue) {
  const values = Object.values(object);

  if (values.includes(searchValue)) return true;

  for (const item of values) {
    if (isObject(item)) {
      return contains(item, searchValue);
    } else if (item === searchValue) {
      return true;
    }
  }
  return false;
};

console.log(contains({ foo: "foo" }, "bar")); // false
console.log(contains({ foo: "foo" }, "foo")); // true
console.log(contains({ foo: { bar: "bar" } }, "bar")); // true
console.log(contains({ foo: { bar: "bar" } }, "foo")); // false
