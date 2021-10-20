/**
 * Returns whether you can construct the sentence from the given words,
 * and the different ways.
 * 
 * TC: (m = sentence length, n = words length)
 * - Brute: O(n^m)
 * - Optimized: O(n^m)
 *      
 * 
 * SC:
 * - Brute: O(m * (m + m)) = O(m^2)
 * - Optimized: O(m^2)
 */
export function allConstruct(sentence: string, words: string[], memo: Record<string, string[][]> = {}): string[][] {
  if (sentence in memo) return memo[sentence];
  if (sentence === '') return [[]];

  let totalConstructs: string[][] = [];

  for (const word of words) {
    if (sentence.indexOf(word) === 0) {
      const newSentence = sentence.slice(word.length);
      const construct = allConstruct(newSentence, words, memo);
      const newConst = construct.map((c) => [word, ...c]);
      totalConstructs.push(...newConst);
    }
  }

  return memo[sentence] = totalConstructs;
}


// Test
let t1: [number, number], t2: [number, number];

t1 = process.hrtime();
console.log(allConstruct('purple', ['purp','p', 'ur', 'le', 'purpl'])); // [[purp,le],[p,ur,p,le]]
console.log(allConstruct('abcdef', ['ab','abc', 'def', 'abcd'])); // [[abc,def]]
console.log(allConstruct('skateboard', ['bo','rd', 'ate', 't', 'ska', 'sk', 'boar'])); // []
console.log(allConstruct('enterapotentpot', ['a','p', 'ent', 'enter', 'ot', 'o', 't'])); // [[],[],[],[]]
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); // []
t2 = process.hrtime(t1);
console.log('Time in milliseconds is: ', t2[0] * 1000 + t2[1] / 1000000);
