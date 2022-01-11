export function permutations(nums: number[]): number[][] {
  const outList: number[][] = [];
  backtrack(outList, [], nums);
  return outList;
}

function backtrack(outList: number[][], tmpList: number[], nums: number[]) {
  // When tmpList is full, push to ou tlist
  if(tmpList.length === nums.length) {
    outList.push([...tmpList]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (tmpList.includes(nums[i])) continue; // Skip if element exists in tmpList
    tmpList.push(nums[i]);
    backtrack(outList, tmpList, nums);
    tmpList.pop();
  }
}
