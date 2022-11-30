import { bubbleSort } from "./scripts/bubbleSort.js";
import { selectionSort } from "./scripts/selectionSort.js";
import { mergeSort } from "./scripts/mergeSort.js";

console.log("BUBBLE: ");
console.log(bubbleSort([2, 1, 3, 4, 5]));
console.log(bubbleSort([2, 1, 4, 5, 3]));
console.log(
  "Average time in milliseconds for array of length 100: ",
  sortBenchmark(bubbleSort),
  "\n"
);

console.log("SELECTION: ");
console.log(selectionSort([1, 3, 5, 2, 4]));
console.log(selectionSort([2, 1, 4, 5, 3]));
console.log(
  "Average time in milliseconds for array of length 100: ",
  sortBenchmark(selectionSort),
  "\n"
);

// let arr1 = [1, 3, 5, 2, 4]
// let arr2 = [2, 1, 4, 3, 5]
// console.log("MERGE: ");
// mergeSort(arr1, [], 0, 4)
// console.table(arr1);
// mergeSort(arr2, [], 0, 4)
// console.table(arr2);

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
console.log("MERGE: ", mergeSort([1, 3, 5, 2, 4, 6]));
console.log("MERGE: ", mergeSort([3, 7, 5, 4, 2, 6]));

function sortBenchmark(fn) {
  const beginning = new Date().getTime();
  for (let i = 0; i < 1000; i++) {
    fn([
      71, 21, 96, 52, 4, 10, 57, 23, 58, 46, 13, 33, 63, 94, 9, 3, 1, 44, 24,
      64, 95, 40, 99, 83, 81, 62, 59, 82, 80, 2, 11, 45, 47, 28, 73, 98, 30, 5,
      26, 93, 84, 65, 32, 20, 89, 53, 76, 55, 69, 54, 17, 67, 42, 27, 43, 41,
      51, 6, 37, 25, 15, 90, 31, 87, 86, 48, 19, 34, 49, 100, 29, 85, 50, 97,
      39, 61, 79, 18, 16, 78, 77, 8, 38, 7, 66, 88, 75, 60, 72, 70, 12, 35, 36,
      74, 68, 92, 22, 56, 14, 91,
    ]);
  }
  const end = new Date().getTime();

  return (end - beginning) / 2000;
}
