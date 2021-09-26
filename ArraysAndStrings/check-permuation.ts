function checkPermutation1(str1: string, str2: string): boolean {
	const charCounter: Record<string, number> = {};
	// Populate char counter map
	for(let i = 0; i < str1.length; i++) {
    if (charCounter[str1[i]]) {
      charCounter[str1[i]] = charCounter[str1[i]] + 1;
    }
    charCounter[str1[i]] = 1;
  }
  // Decrement Counter from str2
  for(let i = 0; i < str2.length; i++) {
    if (!charCounter[str1[i]]) {
    return false;
  }
  charCounter[str2[i]] = charCounter[str2[i]] - 1;
  }
  // Validate all chars in str1 were used
  for (let c in charCounter) {
    if (charCounter[c] > 0) {
      return false;
  }
  }
  return true;
}

// Test
console.assert(checkPermutation1('aba', 'aab') === true);
console.assert(checkPermutation1('aba', 'abb') === false);

function checkPermutation2(str1: string, str2: string): boolean {
  return sort(str1) === sort(str2);
}

function sort(str: string): string {
  return str.split('').sort().join('');
}

console.assert(checkPermutation2('aba', 'aab') === true);
console.assert(checkPermutation2('aba', 'abb') === false);
