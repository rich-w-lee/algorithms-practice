function urlify(str: string): string {
  const trimmedStr = str.trim();
  let outputStr = '';
  let inSpaceGroup = false;
  for (let i = 0; i < trimmedStr.length; i++) {
    if (trimmedStr[i] === ' ') {
        if (!inSpaceGroup) {
      inSpaceGroup = true;
      outputStr += '%20';
      }
    } else {
      inSpaceGroup = false;
      outputStr += trimmedStr[i];
    }
  }
  return outputStr;
}

// Test
console.assert(urlify('This is a     test'   ) === 'This%20is%20a%20test');
