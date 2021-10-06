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
console.log(topKFrequentPQ(['i','love','leetcode','i','love','coding'],2)); // ['i', 'love']
console.log(topKFrequentPQ(['a', 'a', 'a', 'b', 'c'], 3)); // ['a', 'b', 'c']
