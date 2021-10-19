/**
 * This function takes in a target and an array of numbers and will
 * return whether any of the numbers in the array are able to sum to
 * the target sum, and return those numbers
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
 * - Brute = O(m)
 * - Memo = (m^2)
 */
export function howSum(targetSum: number, numbers: number[], memo: Record<number, number[] | null> = {}): number[] | null {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) {
    return [];
  }

  for (const num of numbers) {
    const remainder = targetSum - num;
    if (remainder < 0) continue;

    const result = howSum(remainder, numbers, memo);
    if (result) {
      result.push(num);
      memo[targetSum] = result;
      return memo[targetSum];
    };
  }
  memo[targetSum] = null;
  return null;
}

// Test
let t1: [number, number], t2: [number, number];

t1 = process.hrtime();
console.log(howSum(7, [2, 3])); // [2,2,3]
console.log(howSum(7, [5, 3, 4, 7])); // [[3,4],[7]]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [[3,5],[2,2,2,2]]
console.log(howSum(300, [7, 14])); // null
t2 = process.hrtime(t1);
console.log('Time in milliseconds is: ', t2[0] * 1000 + t2[1] / 1000000);
