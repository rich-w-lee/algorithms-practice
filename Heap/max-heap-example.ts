import { MaxHeap  } from './MaxHeap';

const maxHeap1 = new MaxHeap();
maxHeap1.add(10);
maxHeap1.add(15);
maxHeap1.add(5);
maxHeap1.add(14);
maxHeap1.add(8);

console.log(maxHeap1.peek() === 15);
console.log(maxHeap1.poll() === 15);
console.log(maxHeap1.remove(14) === 14);
console.log(maxHeap1.peek() === 10);
console.log(maxHeap1.poll() === 10);
console.log(maxHeap1.remove(8) === 8);
console.log(maxHeap1.peek() === 5);
console.log(maxHeap1.poll() === 5);
console.log(maxHeap1.peek() === null);
