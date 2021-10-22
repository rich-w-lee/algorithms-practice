export function multiply(m: number, n: number): number {
	if (n === 1) return m;
	// If even, just double n/2
	if (n % 2 === 0) {
    const value = multiply(m, n/2)
    return value + value;
  }
	// If odd pull the odd out
  else {
    const value = multiply(m, (n-1)/2)
    return m + value + value;
  }
}

// Test
console.log(multiply(1234,456));
