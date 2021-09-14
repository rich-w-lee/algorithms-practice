/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
function maxSubArray(arr, k) {
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
// console.log(maxSubArray([2,3,4,1,5], 3)); // Expected = 10

// Size of smallest contiguous subarray with a sum >= k

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function smallestSubarray(arr, k) {
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
