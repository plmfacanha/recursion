const mergeSort = (arr) => {
  if (Array.isArray(arr)) {
    if (arr.length === 0) {
      return [];
    }

    if (arr.length === 1) {
      return arr;
    }
  }
};

console.log(mergeSort([]));
console.log(mergeSort([72]));
console.log(mergeSort([72, 14, 25]));
