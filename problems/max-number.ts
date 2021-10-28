export function maxNumber(a: number, b: number): number {

  const diff = a - b;

  const isNegative = ((diff >> 31) & 1) === 1

  return (isNegative && b) || a;
}

export function maxNumberMult(a: number, b: number): number {

  const diff = a - b;

  // Use this to determine if the sign is negative
  // 1 = neg
  // 0 = pos
  const diffSign = ((diff >> 31) & 1);

  // Opposite of diffSign
  const diffSignOpposite = ((diff >> 31) & 0);

  // If a is larger, diff will be positive so diffSign will be 0
  // If b is larger, diff sill be negative so diffSign will be 1

  // If a is larger, multiplying by the opposite of the diff sign will result in a
  // If a is smaller, it will result in a sum of 0
  // Repeat the same for b but the inverse
  // If you sum them, you'd result in either a or b since diffSign and the opposite are mutex
  return a * diffSignOpposite + b * diffSign;
}


// Test
console.log(maxNumber(1, 12))
console.log(maxNumber(-1, -12))
console.log(maxNumber(0, 0))

console.log(maxNumberMult(3,4));
