import { time } from "../../time";

/**
 * m = size of target, n = size of numbers
 * TC: O(m * n * m) = O(m^2 * n)
 * SC: O(m * n * m) = O(m^2 * n)
 */
export function canConstruct(target: string, words: string[]): boolean {
  const table: boolean[] = new Array(target.length + 1).fill(false);
  table[0] = true // For ''

  for (let i = 0; i <= target.length; i++) {
    // Option 1, check prefix + new word
    // const prefix = target.substr(0, i); // This step takes m time, m space

    // if (table[i]) {
    //   for (const word of words) {
    //     const key = prefix + word; // This step takes m time, m space
    //     if (key === target.substr(0, key.length)) table[key.length] = true;
    //   }
    // }

    // Option 2: Check current location + word offset
    // Effectively the same as option 1, but removing the unnecessary parts
    // of the prefix that would have already been calculated
    if (table[i]) {
      for (const word of words) {
        if (target.slice(i, i + word.length) === word) table[i + word.length] = true;
      }
    }
  }

  return table[target.length];
}

// Test
time(() => {
  console.log(canConstruct('abcdef', ['ab','abc', 'def', 'abcd']) === true);
  console.log(canConstruct('skateboard', ['bo','rd', 'ate', 't', 'ska', 'sk', 'boar']) === false);
  console.log(canConstruct('enterapotentpot', ['a','p', 'ent', 'enter', 'ot', 'o', 't']) === true);
  console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']) === false);
});
