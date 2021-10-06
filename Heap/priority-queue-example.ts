import { PriorityQueue } from './PriorityQueue';

const pq = new PriorityQueue();

pq.add(10);
pq.add(9);
pq.add(11);
pq.add(8);
pq.add(12);

console.log(pq.peek() === 12);
console.log(pq.poll() === 12);
console.log(pq.peek() === 11);
console.log(pq.remove(8) === true);
console.log(pq.remove(8) === false);
console.log(pq.contains(8) === false);
console.log(pq.contains(9) === true);
pq.add(15);
console.log(pq.peek() === 15);
console.log(pq.poll() === 15);
console.log(pq.size === 3);
console.log(pq.poll() === 11);
console.log(pq.poll() === 10);
console.log(pq.poll() === 9);
console.log(pq.poll() === null);
