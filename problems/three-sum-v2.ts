function threeSum2(nums: number[]): number[][] {
  // Step 1: Sort for O(nlogn), which is free
  nums.sort((a,b) => a-b);
  
 // 3 sum requires looping over two sum for O(n^2) time
  const sums: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
      // Break if nums[i] > 0 since the array is sorted
      if (nums[i] > 0) { break; }
      
      // Call two sum if first element
      // Or if last element and curr element are different
      // This is to prevent duplicates
      if (i === 0 || (nums[i - 1] !== nums[i])) {
          twoSum2(nums, i, sums);
      }
  }
  return sums;
};

function twoSum2(nums: number[], i: number, sums: number[][]) {
  let left = i + 1;
  let right = nums.length - 1;

  while (left < right) {
      const curr = nums[i] + nums[left] + nums[right];

      if (curr < 0) {
          left++;
      } else if (curr > 0) {
          right--;
      } else {
          sums.push([nums[i], nums[left], nums[right]]);
          left++;
          right--;
          
          // Avoid duplicates by moving left pointer if equal to next
          while (left < right && nums[left] === nums[left - 1]) {
              left++;
          }
      }
  }
}

console.log(threeSum2([-1,0,1,2,-1,-4,-2,-3,3,0,4]));
