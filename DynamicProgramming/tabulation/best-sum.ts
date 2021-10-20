import { time } from "../../time";

/**
 * m = size of target sum, n = size of numbers
 * TC: O(m^2 * n)
 *    - It takes m time to copy over the array
 * SC: O(m^2)
 */
export function bestSum(targetSum: number, numbers: number[]): number[] | null {
  const table: (number[] | null)[] = new Array(targetSum + 1).fill(null);

  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (const num of numbers) {
        if (i+num <= targetSum) {
          const newSum = [...table[i]!, num];
          if (table[i+num] !== null) {
            if (table[i+num]!.length > newSum.length) {
              table[i+num] = newSum;
            }
          } else {
            table[i+num] = newSum;
          }
        };
      }
    }
  }

  return table[targetSum];
}

// Test
time(() => {
  console.log(bestSum(7, [2, 3])); // [2,2,3]
  console.log(bestSum(7, [5, 3, 4, 7])); // [7]
  console.log(bestSum(7, [2, 4])); // null
  console.log(bestSum(8, [2, 3, 5])); // [3,5]
  console.log(bestSum(100, [1, 2, 5, 25])); // [25,25,25,25]
  console.log(bestSum(300, [7, 14])); // null
});
