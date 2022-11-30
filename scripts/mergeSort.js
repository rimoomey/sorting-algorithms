function mergeSort(arr) {
  let low = 0;
  let high = arr.length - 1;

  if (low < high) {
    let middle = low + (high - low) / 2;
    let leftSide = arr.slice(low, middle + 1);
    let rightSide = arr.slice(middle + 1, high + 1);

    leftSide = mergeSort(leftSide); // break down left side and reassign it to the sorted version
    rightSide = mergeSort(rightSide); // break down right side and reassign it to the sorted version
    arr = merge(leftSide, rightSide); // finally, reassign the original array to its sorted version
  }
  return arr; // this will be what we ultimately get back
}

//assume arr1 and arr2 are sorted
function merge(arr1, arr2) {
  console.log(arr1, arr2)
  let helper = [];
  let left = 0;
  let right = 0;

  // alternate between left and right, choosing the smaller option of the two each time
  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      helper.push(arr1[left]);
      left++;
    } else {
      helper.push(arr2[right]);
      right++;
    }
  }

  // move the left over elements into the helper array
  while (left < arr1.length) {
    helper.push(arr1[left]);
    left++;
  }

  while (right < arr2.length) {
    helper.push(arr2[right]);
    right++;
  }

  return helper;
}

export { mergeSort };

/**
 * Example with [1, 3, 5, 2, 4]
 * first splie [1, 3, 5], [2, 4]
 * second split [1, 3], [5]
 * third split [1], [3]
 * first join [1, 3]
 * second join [1, 3, 5]
 * fourth split [2] , [4]
 * third join [2, 4]
 * fourth join [1, 2, 3, 4, 5]
 * 
 * end function
 */
