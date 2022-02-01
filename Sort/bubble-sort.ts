/**
 * Bubble sort is a sort function that will iterate
 * over the array and keep moving the highest element up.
 *
 * It's called bubbling because each iteration will bubble
 * an element up the list.
 *
 * Time complexity is O(n^2) in the worst and average case.
 * In the best case, it's O(n) when the array is already sorted.
 *
 * Space complexity is O(1)
 *
 * The main use of this sort is for seeing if an array is sorted,
 * which it is the most effective way for doing that.
 */

/**
 * V1: Nested While Loop
 *
 * TC: O(n^2) best
 */
export function bubbleSort_v1(arr: number[]) {
  // const length = arr.length;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j+1]) {
        const tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tmp;
      }
    }
  }
  return arr;
}

// console.time('bubbleSort_v1 unsorted');
// console.log(bubbleSort_v1([3,6,1,6,2,7]));
// console.timeEnd('bubbleSort_v1 unsorted');

console.time('bubbleSort_v1_sorted');
console.log(bubbleSort_v1([1,2,3,4,5,6]));
console.timeEnd('bubbleSort_v1_sorted');

/**
 * V2: Optimise for an already sorted array
 *
 * TC: O(n) best, O(n^2) average & worst
 */
export function bubbleSort_v2(arr: number[]) {
  let changed: boolean;

  do {
    changed = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i+1]) {
        changed = true;
        const tmp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = tmp;
      }
    }
  } while(changed)

  return arr;
}

// console.time('bubbleSort_v2_sorted');
// console.log(bubbleSort_v1([3,6,1,6,2,7]));
// console.timeEnd('bubbleSort_v2_sorted');

console.time('bubbleSort_v2_sorted');
console.log(bubbleSort_v2([1,2,3,4,5,6]));
console.timeEnd('bubbleSort_v2_sorted');
