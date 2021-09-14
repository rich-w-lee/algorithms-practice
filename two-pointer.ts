/**
 * Using the two pointer algorithm, this method will find
 * the indexes of the two numbers in the passed sorted array
 * that add up to the passed sum.
 * 
 * Returns [-1,-1] if there are no numbers that can be found
 * 
 * Time Complexity: O(n)
 */
function twoSum(arr: number[], x: number): [number, number] {
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
console.log(twoSum([-1, 1, 2, 3, 5], 5));


/**
 * Using the two pointer algorithm, this method will find
 * the indexes of the three numbers in the passed sorted array
 * that add up to the passed sum.
 * 
 * Returns [-1,-1] if there are no numbers that can be found
 * 
 * Time Complexity: O(n^2)
 */
function threeSum(arr: number[], x: number): [number, number, number] {
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
 * Using the two pointer algorithm, this method will be given
 * a sorted array and will return a sorted array of the squares
 * of those numbers.
 * 
 * Time Complexity: O(n)
 */
function sortedSquare(arr: number[]): number[] {
  // Set right and left
  let right = 0;
  while (right < arr.length && arr[right] < 0) {
    right++;
  }
  let left = right - 1;

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
