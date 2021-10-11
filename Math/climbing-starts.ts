
/**
 * A person is walking up a flight of stairs wih n steps.
 * 
 * They can step either 1 step or 2 steps at a time.
 * 
 * Output the number of variations of steps they can take.
 * 
 * Ex. 2 = [1,1], [2] = 2
 *     3 = [1,1,1], [2,1], [1,2] = 3
 *     4 = 1111,22,211,112,121 = 5
 *     5 = 11111,122,221,121,1112,2111,1211,1121 = 8
 *     6 = 11111,222,2211,1122,1221,2112,2121,1212,11112 (+ 4 more) = 13
 */
export function climbingStairs(n : number) {
  // Looking at the pattern, it appears to be a fibonacci patter (n = n-1 + n-2)
  // Main difference is that the base numbers are 1=1, 2=2, (instead of both = 1)

  if (n <= 2) return n;

  // Value of the fib of the prev number
  let onePrev = 2;

  // Value of the fib of the number 2 places prior
  let twoPrev = 1;

  // Output value
  let out = 0;

  for (let i = 2; i < n; i++) {
    out = onePrev + twoPrev;
    twoPrev = onePrev;
    onePrev = out;
  }

  return out;
}

// Test
console.log(climbingStairs(1) === 1);
console.log(climbingStairs(2) === 2);
console.log(climbingStairs(3) === 3);
console.log(climbingStairs(5) === 8);
console.log(climbingStairs(10) === 89);
