import { LinkedListNode } from '../LinkedList/LinkedList';
import { Queue } from '../StackAndQueue/Queue';
import { BinaryTreeNode } from '../Tree/BinaryTree';

// Linked List Reverse
export function linkedListReverse<T>(head: LinkedListNode<T>): LinkedListNode<T> {
  let prev: LinkedListNode<T> | null = null;
  let curr: LinkedListNode<T> | null = head;
  let next: LinkedListNode<T> | null = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev!;
}

// Tree Depth Print
function depthPrint(node: BinaryTreeNode) {
  console.log(node.value);
  if (node.left) depthPrint(node.left);
  if (node.right) depthPrint(node.right);
}

// Tree Level Print
function levelPrint(root: BinaryTreeNode) {
  let q = new Queue<BinaryTreeNode>();
  q.add(root);

  while (!q.empty()) {
    const node = q.poll();
    if (!node) break;
    console.log(node.value);
    if (node.left) q.add(node.left);
    if (node.right) q.add(node.right);
  }
}

// Combination Sum
function combinationSum(nums: number[], target: number): number[][] {
  const outList: number[][] = [];
  nums.sort();
  backtrack(outList, [], nums, target, 0);
  return outList;
}

function backtrack(outList: number[][], tmpList: number[], nums: number[], target: number, start: number) {
  if (target < 0) return;
  if (target === 0) {
    outList.push([...tmpList]);
    return;
  }
  for (let i = start; i < nums.length; i++) {
    tmpList.push(nums[i]);
    backtrack(outList, tmpList, nums, nums[i] - target, i);
    tmpList.pop();
  }
}

// Combination Sum No Duplicates
function combinationSum2(nums: number[], target: number): number[][] {
  const outList: number[][] = [];
  nums.sort();
  backtrack2(outList, [], nums, target, 0);
  return outList;
}

function backtrack2(outList: number[][], tmpList: number[], nums: number[], target: number, start: number) {
  if (target < 0) return;
  if (target === 0) {
    outList.push([...tmpList]);
    return;
  }
  for (let i = start; i < nums.length; i++) {
    // Skip duplicates
    if (i > start && nums[i] === nums[i-1]) continue;
    tmpList.push(nums[i]);
    backtrack2(outList, tmpList, nums, nums[i] - target, i + 1);
    tmpList.pop();
  }
}

// Binary Search
function binarySearch(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      // Val is less than target, move mid up by moving low bound
      low = mid + 1;
    }
    if (nums[mid] > target) {
      // Val is higher than target, move mid down by moving high bound
      high = mid -1;
    }
  }

  return -1;
}

// Two Sum
function twoSum(nums: number[], target: number): number[] {
  for(let i = 0; i < nums.length; i++) {
    const remainder = target - nums[i];
    // Binary search for remainder
    for (let j = 0; j < nums.length; j++) {
      let low = 0;
      let high = nums.length - 1;

      while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (nums[mid] === remainder) return [nums[i], nums[mid]]
        if (nums[mid] < remainder) {
          low = mid + 1;
        }
        if (nums[mid] > remainder) {
          high = mid - 1;
        }
      }
    }
  }
  
  return [];
}

// Sliding Window - Max Subarray
function maxSubarray(nums: number[], size: number): number {
  let maxSum = -Infinity;
  let currSum = 0;
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];

    if ((i - start + 1) === size) {
      maxSum = Math.max(maxSum, currSum);
      currSum-=nums[start];
      start++;
    }
  }

  return maxSum;
}

// Sliding Window - Min Subarray
function minSubarray(nums: number[], size: number): number {
  let minSum = Infinity;
  let currSum = 0;
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];

    if ((i - start + 1) === size) {
      minSum = Math.min(minSum, currSum);
      currSum -= nums[start];
      start++;
    }
  }

  return minSum;
}
