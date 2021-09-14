/**
 * Converts a "licence key" string into a set standard.
 * 
 * Given a string and a size k, this will extract all letters
 * from the string, and create a new string that is grouped
 * into groups of size k, and separated by a '-'. If there
 * are not enough letters to fill a group, the incomplete
 * group should be at the beginning of the new license key.
 * 
 * Time Complexity: O(n)
 */
 function licenseKeyFormatting(s: string, k: number) {
    const letters = [];

    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] !== '-') {
        if (letters.length % (k + 1) === k) {
          letters.push('-');
        }
        letters.push(s[i].toUpperCase());
      }
    }

    return letters.reverse().join("");
};


// Test cases
console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));  // Expected = "5F3Z-2E9W"
console.log(licenseKeyFormatting("2-5g-3-J", 2));     // Expected = "2-5G-3J"
