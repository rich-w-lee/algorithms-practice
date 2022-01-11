/**
 * A function that searches for a target number in a given
 * array of sorted numbers.
 */
export function binarySearch(nums: number[], target: number): boolean {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2)
    if (nums[mid] === target) {
      return true;
    }

    if (nums[mid] < target) {
      // Set low to index after mid
      low = mid + 1; 
    }

    if (nums[mid] > target) {
      // Set high to index before mid
      high = mid - 1;
    }
  }

  return false;
}

// Test
const a1 = [1,2,3,4,5];
const a2 = [1,3,5,7,9,11];

console.assert(binarySearch(a1, 1));
console.assert(!binarySearch(a1, 10));
console.assert(binarySearch(a2, 3));
console.assert(!binarySearch(a2, 20));
