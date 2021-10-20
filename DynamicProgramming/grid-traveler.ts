/**
 * For a given n by m grid, assuming you can only traverse
 * down or right through the grid, and the goal is to reach
 * the bottom right, how many different ways are there to
 * get to the goal?
 * 
 * Ex a 2x3 grid would have 3 ways
 * 
 * Without Memo: TC = O(2^(n+m))
 * With Memo: TC = O(n*m)
 * Space = O(n+m)
 */

// Approach: Bottom Up DP + Memo

// Starting from the far bottom right of the grid, we know
// there would only be one way to get to that square - by
// staying still.

// From there we will backtrack and sum the bottom value (if present)
// with the right value (if present)

// So a 3x3 is the sum of 2x3 and 3x2
// A 1x1 is 1

// 2x3 = (1x3) + (2x2)
// 1x3 = 0 + 1x2
  // 1x2 = 1 + 1x1
    // 1x1 = 1
    // = 0 + 1
    // = 1
// 2x2 = 1x2 + 2x1
  // 1x2 = 0 + 1x1 = 1
  // 2x1 = 1 + 0 = 1
  // = 1 + 1 = 0

export function gridTravelerMemo(n: number, m: number, memo: Record<string, number> = {}): number {
  const memoKey = `${n},${m}`;
  const memoKey2 = `${m},${n}`;
  if (memo[memoKey]) return memo[memoKey];
  if (memo[memoKey2]) return memo[memoKey2];

  if (n === 1 && m === 1) {
    return 1;
  }

  if (n === 0 || m === 0) {
    return 0;
  }

  memo[memoKey] = gridTravelerMemo(n - 1, m, memo) + gridTravelerMemo(n, m - 1, memo);
  
  return memo[memoKey];
}

// Test
let t1: [number, number], t2: [number, number];

t1 = process.hrtime();
console.log(gridTravelerMemo(1,1)); // 1
console.log(gridTravelerMemo(2,3)); // 3
console.log(gridTravelerMemo(3,2)); // 3
console.log(gridTravelerMemo(3,3)); // 6
console.log(gridTravelerMemo(18,18)); // 2333606220
t2 = process.hrtime(t1);
console.log('Time in milliseconds is: ', t2[0] * 1000 + t2[1] / 1000000);
