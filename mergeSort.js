const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  // # 1. Divide
  mid = Math.floor(arr.length / 2); // 3
  left = mergeSort.slice(arr[0], mid);
  right = mergeSort.slice(arr[mid], arr.length);

  // # 2. Merge (Combine)
  return merge(left_half, right_half);
};

// console.log(mergeSort([]));
// console.log(mergeSort([72]));
console.log(mergeSort([72, 14, 25]));

/* 
def merge(left, right):
    sorted_arr = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            sorted_arr.append(left[i])
            i += 1
        else:
            sorted_arr.append(right[j])
            j += 1
            
    # Append any remaining elements
    sorted_arr.extend(left[i:])
    sorted_arr.extend(right[j:])
    return sorted_arr

*/
