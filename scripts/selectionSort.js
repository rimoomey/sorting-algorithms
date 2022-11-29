function selectionSort(arr) {
  for (let currentIndex = 0; currentIndex < arr.length - 1; currentIndex++) {
    let minimumIndex = findMinimum(arr.slice(currentIndex));
    minimumIndex += currentIndex;

    if (arr[minimumIndex] < arr[currentIndex]) {
      const temp = arr[currentIndex];
      arr[currentIndex] = arr[minimumIndex];
      arr[minimumIndex] = temp;
    }
  }
  return arr;
}

function findMinimum(arr) {
  let minimum = Number.MAX_VALUE;
  let minimumIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minimum) {
      minimum = arr[i];
      minimumIndex = i;
    }
  }
  return minimumIndex;
}

export { selectionSort };

/**
 * the idea behind selection sort is that you find the minimum value in the array and swap it into the first index
 * then, you calculate the minimum value of array.slice(1), i.e. the rest of the array, and swap it into the second index
 * this continues until you reach the end of the array
 *
 * pseudocode
 *
 * function selectionSort(arr) {
 *
 *   for(let i = 0; i < arr.length; i++) {
 *     let minimumIndex = index of minimum value from i to arr.length - 1 (arr.slice(i))
 *
 *     swap minimumIndex value and i value
 *   }
 *
 *  return arr
 * }
 */
