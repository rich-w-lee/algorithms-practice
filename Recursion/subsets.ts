export function subsets(nums: number[]): number[][] {
  const outList: number[][] = [];
  nums.sort();
  backtrack(outList, [], nums, 0);
  return outList;
}

function backtrack(outList: number[][], tmpList: number[], nums: number[], start: number) {
  outList.push(tmpList);
  for (let i = start; i < nums.length; i++) {
    tmpList.push(nums[i]);
    backtrack(outList, tmpList, nums, i + 1);
    tmpList.pop();
  }
}

export function subsets2(nums: number[]): number[][] {
  const outList: number[][] = [];
  nums.sort();
  backtrack2(outList, [], nums, 0);
  return outList;
}

function backtrack2(outList: number[][], tmpList: number[], nums: number[], start: number) {
  outList.push([...tmpList]);
  for (let i = start; i < nums.length; i++) {
    // Skip duplicates
    if (i > start && nums[i] === nums[i-1]) continue;
    tmpList.push(nums[i]);
    backtrack2(outList, tmpList, nums, i + 1);
    tmpList.pop();
  }
}
