import { PriorityQueue } from './PriorityQueue';

export function topKFrequentPQ(words: string[], k: number): string[] {
  // Step 1: Get Counts using Hashmap
  const freq: Record<string, number> = {};

  // Time = O(n)
  for (const word of words) {
    if (freq[word]) {
      freq[word] += 1;
    } else {
      freq[word] = 1;
    }
  }
  console.log(freq);

  // Step 2: Order the keys and freqs in a PQ

  // Use a min heap PQ, pop off the top 
  let pq = new PriorityQueue<[string, number]>((a,b) => {
    return a[1] - b[1] === 0 ?
      b[0].localeCompare(a[0])
      : a[1] - b[1];
  });

  // Time = O(nlogn)
  for (const word in freq) {
    pq.add([word, freq[word]])
    console.log('adding', [word, freq[word]]);
    if (pq.size > k) {
      pq.poll();
    }
  }

  let topKWords: string[] = [];

  // Time = O(klogk)
  for (let i = 0; i < k; i++) {
    if (pq.size === 0) {
      break;
    }
    topKWords.push(pq.poll()![0]);
  }

  return topKWords.reverse();
}

// Test
// console.log(topKFrequentPQ(['i','love','leetcode','i','love','coding'],2)); // ['i', 'love']
// console.log(topKFrequentPQ(['a', 'a', 'a', 'b', 'c'], 3)); // ['a', 'b', 'c']

console.log(topKFrequentPQ(["glarko","zlfiwwb","nsfspyox","pwqvwmlgri","qggx","qrkgmliewc","zskaqzwo","zskaqzwo","ijy","htpvnmozay","jqrlad","ccjel","qrkgmliewc","qkjzgws","fqizrrnmif","jqrlad","nbuorw","qrkgmliewc","htpvnmozay","nftk","glarko","hdemkfr","axyak","hdemkfr","nsfspyox","nsfspyox","qrkgmliewc","nftk","nftk","ccjel","qrkgmliewc","ocgjsu","ijy","glarko","nbuorw","nsfspyox","qkjzgws","qkjzgws","fqizrrnmif","pwqvwmlgri","nftk","qrkgmliewc","jqrlad","nftk","zskaqzwo","glarko","nsfspyox","zlfiwwb","hwlvqgkdbo","htpvnmozay","nsfspyox","zskaqzwo","htpvnmozay","zskaqzwo","nbuorw","qkjzgws","zlfiwwb","pwqvwmlgri","zskaqzwo","qengse","glarko","qkjzgws","pwqvwmlgri","fqizrrnmif","nbuorw","nftk","ijy","hdemkfr","nftk","qkjzgws","jqrlad","nftk","ccjel","qggx","ijy","qengse","nftk","htpvnmozay","qengse","eonrg","qengse","fqizrrnmif","hwlvqgkdbo","qengse","qengse","qggx","qkjzgws","qggx","pwqvwmlgri","htpvnmozay","qrkgmliewc","qengse","fqizrrnmif","qkjzgws","qengse","nftk","htpvnmozay","qggx","zlfiwwb","bwp","ocgjsu","qrkgmliewc","ccjel","hdemkfr","nsfspyox","hdemkfr","qggx","zlfiwwb","nsfspyox","ijy","qkjzgws","fqizrrnmif","qkjzgws","qrkgmliewc","glarko","hdemkfr","pwqvwmlgri"],14))
// Mine:      ["nftk","qrkgmliewc","qkjzgws","nsfspyox","qengse","htpvnmozay","fqizrrnmif","glarko","hdemkfr","ijy","pwqvwmlgri","qggx","zskaqzwo","zlfiwwb"]
// Expected:  ["nftk","qkjzgws","qrkgmliewc","nsfspyox","qengse","htpvnmozay","fqizrrnmif","glarko","hdemkfr","pwqvwmlgri","qggx","zskaqzwo","ijy","zlfiwwb"]
