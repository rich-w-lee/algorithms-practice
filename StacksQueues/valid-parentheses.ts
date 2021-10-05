import { Stack } from './Stack';

// Time Complexity: O(n): Loop through string
// Space Complexity: O(n): Store (half) characters in stack
export function isValidParentheses(s: string): boolean {
  const matchingParens: Record<string, string> = { '}': '{', ')': '(', ']': '['}

  const stack = new Stack<string>();

  for (const p of s) {
    // Case 1: Stack Empty => push to stack
    if (stack.empty()) {
      if (matchingParens[p]) {
        return false;
      } else {
        stack.push(p);
      }
      continue;
    }

    const stackTop = stack.peek() as string;

    if (isOpeningParen(p)) {
      stack.push(p);
    } else {
      if (stackTop === matchingParens[p]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.empty();
}

function isOpeningParen(s: string): boolean {
  return ['(', '[', '{'].includes(s);
}


// Test
console.log(isValidParentheses('()') === true);
console.log(isValidParentheses('()[]{}') === true);
console.log(isValidParentheses('(]') === false);
console.log(isValidParentheses('([)]') === false);
console.log(isValidParentheses('{[]}') === true);
