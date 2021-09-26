function palindromePermutation(str: string) {
	const charCount: Record<string, number> = {};
	let numChars = 0;
	// Count characters
	for (let i = 0; i < str.length; i++) {
    if (isAlpha(str[i])) {
      if (charCount[str[i]]) charCount[str[i]] = charCount[str[i]] + 1;
      else charCount[str[i]] = 1;
      numChars++;
    }
  }
  // Count number of characters that have an odd amount
  let numOdd = 0;
  for (let c in charCount) {
    if (charCount[c] % 2 === 1) numOdd++;
  }
  // A palindrome can either have a single odd numbered character or none, depending on the length of the string (or total number of characters if we’re only including alpha)
  // If even amount of characters, string must be perfectly mirrored, hence 0 odd chars
  if (numChars % 2 === 0) return numOdd === 0;
  // If there is an odd amount of chars, there can only be a single odd character (the middle character)
  else return numOdd === 1;
}

function isAlpha(letter: string) {
	return letter.toUpperCase() !== letter.toLowerCase();
}

// Test 
console.assert(palindromePermutation("tact coa") === true);
console.assert(palindromePermutation("race car") === true);
console.assert(palindromePermutation("race cbr") === false);
