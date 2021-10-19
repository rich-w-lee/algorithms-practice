/**
 * Returns whether you can construct the sentence from the given words.
 * 
 * TC:
 * - Brute: O(n^m * m) where m = sentence length, n = words length
 *      Additional *m is from the new sentence creation
 * - Optimized: O(n * m^2)
 *      
 * 
 * SC:
 * - Brute: O(m^2)
 *      Additional *m is from the new sentence creation
 * - Optimized: O(m^2)
 */
export function canConstruct(sentence: string, words: string[], memo: Record<string, boolean> = {}): boolean {
  // Approach: Bottom Up DP
  // We will loop through the words, treating each as a prefix of the sentence
  // We will chip away at the left of the string, recursing down until we either:
  // 1. Reach an empty string, in which case we can construct the sentence
  // 2. Reach the end of the words away without having returned true, meaning we
  //    can't construct the sentence

  // Base case, if the sentence is in the memo
  if (sentence in memo) return memo[sentence];

  // Base case, if the sentence is an empty string, return true
  if (sentence === '') return true;

  for (const word of words) {
    if (sentence.startsWith(word)) {
      const newSentence = sentence.slice(word.length);
      if (canConstruct(newSentence, words, memo)) return memo[sentence] = true;
    }
  }

  return memo[sentence] = false;
}

// Test
let t1: [number, number], t2: [number, number];

t1 = process.hrtime();
console.log(canConstruct('abcdef', ['ab','abc', 'def', 'abcd']) === true);
console.log(canConstruct('skateboard', ['bo','rd', 'ate', 't', 'ska', 'sk', 'boar']) === false);
console.log(canConstruct('enterapotentpot', ['a','p', 'ent', 'enter', 'ot', 'o', 't']) === true);
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']) === false);
t2 = process.hrtime(t1);
console.log('Time in milliseconds is: ', t2[0] * 1000 + t2[1] / 1000000);
