import { time } from '../../time';

/**
 * TC: O(mn)
 * SC: O(mn)
 */
export function gridTravelerTab(m: number, n: number): number {
  const table: number[][] = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  table[1][1] = 1;

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if ((i + 1) <= m) table[i + 1][j] += table[i][j];
      if ((j + 1) <= n) table[i][j + 1] += table[i][j];
    }
  }

  return table[m][n];
}

// Test
time(() => {
  console.log(gridTravelerTab(1,1)); // 1
  console.log(gridTravelerTab(2,3)); // 3
  console.log(gridTravelerTab(3,2)); // 3
  console.log(gridTravelerTab(3,3)); // 6
  console.log(gridTravelerTab(18,18)); // 2333606220
});
