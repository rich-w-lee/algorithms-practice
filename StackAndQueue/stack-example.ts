import { Stack } from './Stack';

const stack1 = new Stack();
console.log(stack1.pop() === null);
console.log(stack1.empty() === true);

stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);
stack1.push(5);

console.log(stack1.empty() === false);
console.log(stack1.search(5) === 1);
console.log(stack1.search(1) === 5);
console.log(stack1.search(0) === -1);
console.log(stack1.pop() === 5);
console.log(stack1.peek() === 4);
console.log(stack1.pop() === 4);
console.log(stack1.pop() === 3);
console.log(stack1.pop() === 2);
console.log(stack1.pop() === 1);
console.log(stack1.pop() === null);
