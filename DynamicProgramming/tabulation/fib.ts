import { time } from '../../time';

export function fibTab(n: number): number {
  const table = Array(n + 1).fill(0);
  table[1] = 1;

  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }

  return table[n];
}

// Test
time(() => {
  console.log(fibTab(1)); // 1
  console.log(fibTab(6)); // 8
  console.log(fibTab(7)); // 13
  console.log(fibTab(50)); // 12586269025
});
