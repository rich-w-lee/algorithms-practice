/**
 * Returns the n-th number of the fibonacci sequence
 * 
 * Fib Sequence:
 * - fib(1) = 1
 * - fib(2) = 1
 * 
 * fib(n) = fib(n-1) + fib(n-2)
 * 
 * Ex. 1,1,2,3,5,8,13,21,34,...
 * 
 * O(2^n)
 */
export function fibRecursive(n: number): number {
  if (n <= 2) {
    return 1;
  }

  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// Test
let t1: [number, number], t2: [number, number];

t1 = process.hrtime();
console.log(fibRecursive(1));
console.log(fibRecursive(6));
console.log(fibRecursive(7));
t2 = process.hrtime(t1);
// If each processing fib for a single number took 1s, this would take 16384s, or 4.5h
console.log('Time in millisecond is: ', t2[0] * 1000 + t2[1] / 1000000);


// O(n)
export function fibMemo(n: number): number {
  return fibMemoUtil(n, {});
}

function fibMemoUtil(n: number, memo: Record<number, number>): number {
  if (memo[n]) return memo[n];

  if (n <= 2) {
    return 1;
  }
  
  memo[n] = fibMemoUtil(n - 1, memo) + fibMemoUtil(n - 2, memo);
  return memo[n];
}

// Test
t1 = process.hrtime();
console.log(fibMemo(1));
console.log(fibMemo(6));
console.log(fibMemo(7));
t2 = process.hrtime(t1);
 // If each processing fib for a single number took 1s, this would take 14s
console.log('Time in millisecond is: ', t2[0] * 1000 + t2[1] / 1000000);
