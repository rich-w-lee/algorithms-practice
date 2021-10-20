/**
 * This function takes in a target and an array of numbers and will
 * return whether any of the numbers in the array are able to sum to
 * the target sum.
 * 
 * Constraints:
 * - Can use an element in the array as much as we want
 * - All numbers are positive
 * 
 * TC: O(mn)
 * SC: O(m)
 */
export function canSum(targetSum: number, numbers: number[], memo: Record<number, boolean> = {}): boolean {
  // Base case 0: memo in target sum
  if (targetSum in memo) return memo[targetSum];

  // Base case 0.5: target sum is 0
  if (targetSum === 0) return true;

  for (const num of numbers) {
    // Base case 1: sum is divisible by num
    if ((targetSum % num) === 0) return true;

    // Base case 2: sum is larger than num, try to break down
    // If broken down is summable, return true, else continue
    if (targetSum > num && canSum(targetSum - num, numbers, memo)) return true;
  }
  // If we're here, then the target is not summable
  memo[targetSum] = false;
  return memo[targetSum];
}

// Test
let t1: [number, number], t2: [number, number];

t1 = process.hrtime();
console.log(canSum(7, [2,3]) === true);
console.log(canSum(7, [5,3,4,7]) === true);
console.log(canSum(7, [2,4]) === false);
console.log(canSum(8, [2,3,5]) === true);
console.log(canSum(300, [7,14]) === false);
t2 = process.hrtime(t1);
console.log('Time in milliseconds is: ', t2[0] * 1000 + t2[1] / 1000000);
