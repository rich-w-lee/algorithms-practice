function oneEdit(str1: string, str2: string) {
	// Validate length of the two strings for early outs
	// If the string lengths are more than 1 number apart, that means there is more than one edit
  if (Math.abs(str1.length - str2.length) > 1) return false;

  // Early out for if the strings are equal
  if (str1 === str2) return true;

  // Algo: Put character counts into a HashMap for each str, compare
  let charMap1: Record<string, number> = {}; let charMap2: Record<string, number> = {};
  for (let i = 0; i < str1.length; i++) { 
    if (charMap1[str1[i]]) charMap1[str1[i]] += 1;
    else charMap1[str1[i]] = 1;
  }
  for (let i = 0; i < str2.length; i++) { 
    if (charMap2[str2[i]]) charMap2[str2[i]] += 1;
    else charMap2[str2[i]] = 1;
  }


  // Compare the two maps and the character counts for each
  // Have check for length to in order to optimize the removal/insertion check
  let numDiffs = 0;
  if (str1.length > str2.length) {
    for (let c in charMap1) {
      if (charMap1[c] !== charMap2[c]) numDiffs++;
    }
  } else {
    for (let c in charMap2) {
      if (charMap2[c] !== charMap1[c]) numDiffs++;
    }
  }

  return numDiffs <= 1;
}

// Test
console.assert(oneEdit('test', 'test') === true);
console.assert(oneEdit('test', 'tst') === true);
console.assert(oneEdit('test', 'aast') === false);


function oneEditV2(str1: string, str2: string): boolean {
	if (str1.length === str2.length) {
    return oneEditReplacement(str1, str2);
  } else if (str1.length === str2.length + 1) {
    return oneEditInsertion(str1, str2);
  } else if (str2.length === str1.length + 1) {
    return oneEditInsertion(str2, str1);
  }
  // If there is more than a 1 character difference in lengths, return false
  return false;
}

function oneEditReplacement(str1: string, str2: string): boolean {
	let diffFound = false;
	for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
    if (diffFound) return false;
      diffFound = true;
    }
  }
  return true;
}

function oneEditInsertion(str1: string, str2: string): boolean {
	// str1 is longer than str2
	let i1 = 0;
	let i2 = 0;
	let diffFound = false;

	while (i1 < str1.length && i2 < str2.length) {
		if (str1[i1] !== str2[i2]) {
      if (diffFound) return false;
      diffFound = true;
      // If not equal, move the longer string forward one more to accommodate for insertion/deleting character
      i1++;
    }
    i1++;
    i2++;
  }
  return true;
}

// Test
console.assert(oneEditV2('test', 'test') === true);
console.assert(oneEditV2('test', 'tst') === true);
console.assert(oneEditV2('test', 'aast') === false);
