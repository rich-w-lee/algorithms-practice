import { Queue } from './Queue';

const queue1 = new Queue();

console.log(queue1.poll() === null);
console.log(queue1.empty() === true);

queue1.add(1);
queue1.add(2);
queue1.add(3);
queue1.add(4);
queue1.add(5);

console.log(queue1.empty() === false);
console.log(queue1.poll() === 1);
console.log(queue1.peek() === 2);
console.log(queue1.poll() === 2);
console.log(queue1.poll() === 3);
console.log(queue1.poll() === 4);
console.log(queue1.poll() === 5);
console.log(queue1.poll() === null);
