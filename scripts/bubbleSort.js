function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      const temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  if (isSorted(arr)) {
    return arr
  } else {
    return bubbleSort(arr);
  }
}

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

export { bubbleSort };
export { isSorted };

/**
 * pseudocode
 * function bubbleSort(array) {
 *   for (i = 0; i < array.length - 1; i++) {
 *     if (array[i] > array[i + 1]) swap them
 *    }
 *  if array is not sorted return bubbleSort(array)
 *  return array
 * }
 * }
 */
