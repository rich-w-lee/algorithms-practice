/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 function licenseKeyFormatting(s, k) {
    const letters = [];

    // let count = 1;
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
console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4)); // "5F3Z-2E9W"
console.log(licenseKeyFormatting("2-5g-3-J", 2)); // "2-5G-3J"
