/**
 * @param {number[]} arr
 * @param {number} x
 * @return {number[]}
 */
function twoSum(arr, x) {
  let i = 0;
  let j = arr.length - 1;

  while(i < j) {
    const curr = arr[i] + arr[j];

    if (curr < x) {
      i++;
    } else if (curr > x) {
      j--;
    }
    else {
      return [arr[i], arr[j]];
    }
  }
  return [-1, -1];
}


// Test
// console.log(twoSum([-1, 1, 2, 3, 5], 5));


/**
 * @param {number[]} arr
 * @param {number} x
 * @return {number[]}
 */
function threeSum(arr, x) {
  for(let i of arr) {
    let j = i + 1;
    let k = arr.length - 1;

    while (j < k) {
      const curr = i + arr[j] + arr[k];

      if (curr < x) {
        j++;
      } else if (curr > x) {
        k--;
      }
      else {
        return [i, arr[j], arr[k]];
      }
    }
    
  }
  return [-1, -1, -1];
}

// Test
// console.log(threeSum([1,2,4,5,12], 19));

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function sortedSquare(arr) {
  // Set right and left
  let right = 0;
  while (right < arr.length && arr[right] < 0) {
    right++;
  }
  left = right - 1;

  let output = [];

  while ((left >= 0) && (right < arr.length)) {
    const rSq = arr[right]**2;
    const lSq = arr[left]**2;

    if (rSq > lSq) {
      output.push(lSq);
      left--;
    } else {
      output.push(rSq);
      right++;
    }
  }

  while (left >= 0) {
    output.push(arr[left]**2);
    left--;
  }

  while (right < arr.length) {
    output.push(arr[right]**2);
    right++;
  }


  return output;
}

// Test
console.log(sortedSquare([-4,-3,1,2,3]));
