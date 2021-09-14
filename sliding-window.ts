/**
 * Using the sliding window algorithm, this function
 * will be given an array of numbers and a size, k. The
 * goal is to determine the array of size k that has the
 * largest sum of values, and return that value.
 * 
 * Time Complexity: O(n)
 */
function maxSubArray(arr: number[], k: number): number {
  let maxSum = -Infinity;
  let currSum = 0;
  let start = 0;

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    currSum += val;

    if (i - start + 1 === k) {
      maxSum = Math.max(maxSum, currSum);
      currSum -= arr[start];
      start++;
    }
  }
  return maxSum;
}

// Test
console.log(maxSubArray([2,3,4,1,5], 3)); // Expected = 10

/**
 * Using the sliding window algorithm, this function
 * will be given an array of numbers and a sum, k.
 * The goal is to find the smallest contiguous subarray
 * with a sum >= k.
 * 
 * Time Complexity: O(n)
 */
function smallestSubarray(arr: number[], k: number): number {
  let minSize = Infinity;
  let currSum = 0;
  let start = 0;
  
  for (let end = 0; end < arr.length; end++) {
    const val = arr[end];
    currSum += val;
    while (currSum >= k) {
      minSize = Math.min(minSize, end - start + 1);
      currSum -= arr[start];
      start+=1;
    }
  }
  return minSize;
}

// Test
console.log(smallestSubarray([2,4,2,5,1], 7));
