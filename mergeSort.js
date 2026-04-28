const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  // # 1. Divide
  mid = Math.floor(arr.length / 2); // 3
  left = mergeSort(arr.slice(0, mid));
  right = mergeSort(arr.slice(mid, arr.length));

  // # 2. Merge (Combine)
  return merge(left, right);
};

const merge = (left, right) => {
  sortedArr = [];
  i = j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      sortedArr.append(left[i]);
      i += 1;
    } else {
      sortedArr.append(right[j]);
      j += 1;
    }
  }

  // # Append any remaining elements
  sortedArr.push(...left[i]);
  sortedArr.push(...right[i]);

  return sortedArr;
};

// console.log(mergeSort([]));
// console.log(mergeSort([72]));
console.log(mergeSort([72, 14, 25]));
