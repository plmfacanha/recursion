function mergeSort(arr) {
  // Base case: arrays with 0 or 1 item are already sorted
  if (arr.length <= 1) return arr;

  // Find the middle point and split the array
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  // Merge the sorted halves
  return merge(left, right);
}

/**
 * Helper function to merge two sorted arrays.
 */
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both arrays and push the smaller one
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate any remaining elements
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// console.log(mergeSort([]));
// console.log(mergeSort([72]));
console.log(mergeSort([72, 14, 25, 5, 33, 10, 8, 3]));
