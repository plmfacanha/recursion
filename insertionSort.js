const insertionSort = (arr) => {
  if (Array.isArray(arr)) {
    for (let i = 1; i < arr.length; ++i) {
      let key = arr[i];
      // Insert arr[i] into the sorted subarray arr[0:i-1]
      j = i - 1;

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }

      arr[j + 1] = key;
    }
  }

  return arr;
};

console.log(insertionSort([5, 2, 4, 6, 1, 3])); // [1,2,3,4,5,6]
