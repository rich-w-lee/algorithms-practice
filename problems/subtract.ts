export function subtract(a: number, b: number) : number {
  if (b === 0) return a;

  const diff = a ^ b;
  const borrow = ((~a) & b ) << 1;

  return subtract(diff, borrow);
}

// Test
console.log(subtract(125, 23));
