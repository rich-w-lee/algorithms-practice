
/**
 * Given a sorted array, find the two numbers that add up to the given target
 */
export function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    let remainder = target - nums[i];
    // Binary Search for remainder in array
    let low = 0, high = nums.length - 1;
    for (let j = 0; j < nums.length; j++) {
      let mid = low + Math.floor((high - low) / 2)
      if (nums[mid] === remainder) return [nums[i], remainder];
      if (nums[mid] < remainder) low = mid + 1;
      if (nums[mid] > remainder) high = mid - 1;
    }
  }
  return [];
}

// Test
const a1 = [1,2,3,4,5];

console.log(twoSum(a1, 9));
