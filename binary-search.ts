/**
 * Finds the index of the passed number within the passed array
 * 
 * Returns -1 if the number is not present.
 * 
 * Different than Array.find because this is in O(log(n)) time vs O(n)
 */
function binarySearch(arr: number[], x: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((right + left)/2);

    if (arr[mid] === x) {
      return mid;
    }
    else if (arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// Test
console.log(binarySearch([1,2,4,5,7,8,10], 7)); // Expect = 4


/**
 * Finds the start and end index of a grouping of the number X
 */
function binarySearchGroup(arr: number[], x: number): [number, number] {
  let left = 0;
  let right = arr.length - 1;
  let groupLeft = -1;
  let groupRight = -1;

  while (left <= right) {
    const mid = Math.floor((right + left)/2);

    if (arr[mid] === x) {
      groupLeft = mid;
      right = mid - 1;
    }
    else if (arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  left = 0;
  right = arr.length;
  while (left <= right) {
    const mid = Math.floor((right + left)/2);

    if (arr[mid] === x) {
      groupRight = mid;
      left = mid + 1;
    }
    else if (arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return [groupLeft, groupRight];
}

// Test
console.log(binarySearchGroup([1,4,4,5,7,8,10], 4)); // Expected = [1,2]
