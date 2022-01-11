export function combinationSum(nums: number[], target: number): number[][] {
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
    backtrack(outList, tmpList, nums, target - nums[i], i);
    tmpList.pop();
  }
}

console.log(combinationSum([2,3,5], 8));

export function combinationSum2(nums: number[], target: number): number[][] {
  const outList: number[][] = [];
  nums.sort();
  backtrack2(outList, [], nums, target, 0);
  return outList;
}

function backtrack2(outList: number[][], tmpList: number[], nums: number[], target: number, start: number) {
  if (target < 0) return;
  if (target === 0) {
    outList.push([...tmpList]);
  }

  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] === nums[i-1]) continue; // Skip duplicates
    tmpList.push(nums[i]);
    backtrack2(outList, tmpList, nums, target - nums[i], i + 1); // i + 1 because no duplicates
    tmpList.pop();
  }
}

console.log(combinationSum2([2,3,5], 8));
