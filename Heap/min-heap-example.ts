import { MinHeap  } from './MinHeap';

const minHeap1 = new MinHeap();
minHeap1.add(10);
minHeap1.add(15);
minHeap1.add(5);
minHeap1.add(14);
minHeap1.add(8);

console.log(minHeap1.peek() === 5);
console.log(minHeap1.poll() === 5);
console.log(minHeap1.remove(8) === 8);
console.log(minHeap1.peek() === 10);
console.log(minHeap1.poll() === 10);
console.log(minHeap1.remove(14) === 14);
console.log(minHeap1.peek() === 15);
console.log(minHeap1.poll() === 15);
console.log(minHeap1.peek() === null);
