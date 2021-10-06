import { PriorityQueue } from './PriorityQueue';

const pqMax = new PriorityQueue<number>((a,b) => b - a);

pqMax.add(10);
pqMax.add(9);
pqMax.add(11);
pqMax.add(8);
pqMax.add(12);
pqMax.add(12);

console.log(pqMax.peek() === 12);
console.log(pqMax.poll() === 12);
console.log(pqMax.peek() === 12);
console.log(pqMax.poll() === 12);
console.log(pqMax.peek() === 11);
console.log(pqMax.remove(8) === true);
console.log(pqMax.remove(8) === false);
console.log(pqMax.contains(8) === false);
console.log(pqMax.contains(9) === true);
pqMax.add(15);
console.log(pqMax.peek() === 15);
console.log(pqMax.poll() === 15);
console.log(pqMax.size === 3);
console.log(pqMax.poll() === 11);
console.log(pqMax.poll() === 10);
console.log(pqMax.poll() === 9);
console.log(pqMax.poll() === null);

const pqMin = new PriorityQueue<number>((a,b) => a - b);
pqMin.add(10);
pqMin.add(15);
pqMin.add(5);
pqMin.add(14);
pqMin.add(8);

console.log(pqMin.peek() === 5);
console.log(pqMin.poll() === 5);
console.log(pqMin.remove(8) === true);
console.log(pqMin.peek() === 10);
console.log(pqMin.poll() === 10);
console.log(pqMin.remove(14) === true);
console.log(pqMin.peek() === 15);
console.log(pqMin.poll() === 15);
console.log(pqMin.peek() === null);
