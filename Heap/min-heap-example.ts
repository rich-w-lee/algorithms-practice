import { MinHeap  } from './MinHeap';

const minHeap1 = new MinHeap();
minHeap1.add(10);
minHeap1.add(15);
minHeap1.add(5);
minHeap1.add(14);
minHeap1.add(8);

console.log(minHeap1.peek());
console.log(minHeap1.poll());
console.log(minHeap1.peek());
console.log(minHeap1.poll());
console.log(minHeap1.peek());
console.log(minHeap1.poll());
console.log(minHeap1.peek());
console.log(minHeap1.poll());
console.log(minHeap1.peek());
console.log(minHeap1.poll());
console.log(minHeap1.peek());
