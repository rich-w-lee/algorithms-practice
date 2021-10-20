import { time } from "../../time";

/**
 * m = size of target sum, n = size of numbers
 * TC: O(mn)
 * SC: O(m)
 */
export function canSum(targetSum: number, numbers: number[]): boolean {
  const table = new Array(targetSum + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= targetSum; i++) {
    if (table[i]){
      for (const num of numbers) {
        if ((i + num) <= targetSum) table[i+num] = true;
      }
    }

  }

  return table[targetSum];
}

// Test
time(() => {
  console.log(canSum(7, [2,3]) === true);
  console.log(canSum(7, [5,3,4,7]) === true);
  console.log(canSum(7, [2,4]) === false);
  console.log(canSum(8, [2,3,5]) === true);
  console.log(canSum(300, [7,14]) === false);
});
