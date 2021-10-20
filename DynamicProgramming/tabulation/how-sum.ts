import { time } from "../../time";

/**
 * m = size of target sum, n = size of numbers
 * TC: O(m^2 * n)
 *    - It takes m time to copy over the array
 * SC: O(m^2)
 */
export function howSum(targetSum: number, numbers: number[]): number[] | null {
  const table: (number[] | null)[] = new Array(targetSum + 1).fill(0).map(() => null);

  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (const num of numbers) {
        if (i+num <= targetSum) table[i+num] = [...table[i]!, num];
      }
    }
  }

  return table[targetSum];
}

// Test
time(() => {
  console.log(howSum(7, [2, 3])); // [2,2,3]
  console.log(howSum(7, [5, 3, 4, 7])); // [[3,4],[7]]
  console.log(howSum(7, [2, 4])); // null
  console.log(howSum(8, [2, 3, 5])); // [[3,5],[2,2,2,2]]
  console.log(howSum(300, [7, 14])); // null
});
