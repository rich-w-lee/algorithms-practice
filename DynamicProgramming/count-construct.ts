import { count } from "console";

/**
 * Returns whether you can construct the sentence from the given words,
 * and the amount of ways.
 * 
 * TC: (m = sentence length, n = words length)
 * - Brute: O(n^m * m)
 * - Optimized: O(n * m^2)
 *      
 * 
 * SC:
 * - Brute: O(m^2)
 * - Optimized: O(m^2)
 */
export function countConstruct(sentence: string, words: string[], memo: Record<string, number> = {}): number {
  if (sentence in memo) return memo[sentence];
  if (sentence === '') return 1;

  let count = 0;
  for (const word of words) {
    if (sentence.startsWith(word)) {
      const newSentence = sentence.slice(word.length);
      count += countConstruct(newSentence, words, memo);
    }
  }
  
  return memo[sentence] = count;
}

// Test
let t1: [number, number], t2: [number, number];

t1 = process.hrtime();
console.log(countConstruct('purple', ['purp','p', 'ur', 'le', 'purpl']) === 2);
console.log(countConstruct('abcdef', ['ab','abc', 'def', 'abcd']) === 1);
console.log(countConstruct('skateboard', ['bo','rd', 'ate', 't', 'ska', 'sk', 'boar']) === 0);
console.log(countConstruct('enterapotentpot', ['a','p', 'ent', 'enter', 'ot', 'o', 't']) === 4);
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']) === 0);
t2 = process.hrtime(t1);
console.log('Time in milliseconds is: ', t2[0] * 1000 + t2[1] / 1000000);
