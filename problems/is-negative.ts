export function isNegative(num: number): boolean {
  return ((num >> 31) & 1) === 1;
}

export function isPositive(num: number): boolean {
  return ((num >> 31) & 1) === 0;
}

// Test
console.log(isNegative(-10) === true)
console.log(isNegative(10) === false)
