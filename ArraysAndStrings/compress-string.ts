function compressString(str: string): string {
	if (!str.length) return str;
	let outputStr = '';
	let currChar = str[0];
	let currCount = 0;

	for (let i = 0; i < str.length; i++) {
    if (currChar === str[i]) {
      currCount++;
    } else {
      outputStr += (currChar + currCount);
      currChar = str[i];
      currCount = 1;
    }
  }
  outputStr += (currChar + currCount);
	return outputStr.length < str.length ? outputStr : str;
}

// Test
console.assert(compressString('abc') === 'abc');
console.assert(compressString('aaabbbccc') === 'a3b3c3');
console.assert(compressString('aabcccccaaa') === 'a2b1c5a3');


// Using array join instead of string concat
function compressStringV2(str: string): string {
	if (!str.length) return str;
	let output = [];
	let currChar = str[0];
	let currCount = 0;

	for (let i = 0; i < str.length; i++) {
    if (currChar === str[i]) {
      currCount++;
    } else {
      output.push(currChar + currCount);
      currChar = str[i];
      currCount = 1;
    }
  }
  output.push(currChar + currCount);
  const outputStr = output.join('');
	return outputStr.length < str.length ? outputStr : str;
}

// Test
console.assert(compressStringV2('abc') === 'abc');
console.assert(compressStringV2('aaabbbccc') === 'a3b3c3');
console.assert(compressStringV2('aabcccccaaa') === 'a2b1c5a3');
