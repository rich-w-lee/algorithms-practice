/**
 * This function takes in a target and an array of numbers and will
 * return whether any of the numbers in the array are able to sum to
 * the target sum, and find the shorted path
 * 
 * Constraints:
 * - Can use an element in the array as much as we want
 * - All numbers are positive
 * 
 * Time:
 * - Brute = O(n^m * m)
 * - Memo = O(nm^2)
 * 
 * Space
 * - Brute = O(m^2)
 * - Memo = (m^2)
 */
 export function bestSum(targetSum: number, numbers: number[], memo: Record<number, number[] | null> = {}): number[] | null {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum < 0) return null;
  if (targetSum === 0) {
    return [];
  }

  let shortestSum: number[] | null = null;

  for (const num of numbers) {
    const remainder = targetSum - num;
    let result = bestSum(remainder, numbers, memo);
    if (result) {
      result = [...result, num];
      if (!shortestSum || result.length < shortestSum.length) {
        shortestSum = result;
      }
    };
  }

  memo[targetSum] = shortestSum;
  return shortestSum;
}

// Test
let t1: [number, number], t2: [number, number];

t1 = process.hrtime();
console.log(bestSum(7, [2, 3])); // [2,2,3]
console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(7, [2, 4])); // null
console.log(bestSum(8, [2, 3, 5])); // [3,5]
console.log(bestSum(100, [1, 2, 5, 25])); // [25,25,25,25]
console.log(bestSum(300, [7, 14])); // null
t2 = process.hrtime(t1);
console.log('Time in milliseconds is: ', t2[0] * 1000 + t2[1] / 1000000);
