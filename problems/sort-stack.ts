import { Stack } from '../StackAndQueue/Stack';

export function sortStack(input: Stack<number>): Stack<number> {
  const sortedStack = new Stack<number>(); // Using an array to represent the stack
  const utilStack = new Stack<number>();

  while (!input.empty()) {
    if (sortedStack.empty() || sortedStack.peek()! > input.peek()!) {
      sortedStack.push(input.pop()!);
      continue;
    }

    while (!sortedStack.empty()) {
      if (sortedStack.peek()! > input.peek()!) {
        sortedStack.push(input.pop()!);
        break;
      }
      utilStack.push(sortedStack.pop()!);
      if (sortedStack.empty()) {
        sortedStack.push(input.pop()!);
        break;
      }
    }

    while (!utilStack.empty()) {
      sortedStack.push(utilStack.pop()!)
    }
  }
  return sortedStack;
}

// Test
let s1: Stack<number>;

s1 = new Stack();
[1,2,3,4,5].forEach((e) => {
  s1.push(e)
})
sortStack(s1).print();

s1 = new Stack();
[5,4,3,2,1].forEach((e) => {
  s1.push(e)
})
sortStack(s1).print();

s1 = new Stack();
[1,5,2,6,3].forEach((e) => {
  s1.push(e)
})
sortStack(s1).print();
