/**
 * A Stack is basically a linked list where the head of the link list
 * is the top of the stack
 */
export class Stack<T> {
  top: StackNode<T> | null = null;
  size = 0;

  // Return whether the stack is empty or not
  empty(): boolean {
    return this.top === null;
  }

  // Push element to the top of the stack
  push(value: T): void {
    const node = new StackNode(value);
    if (!this.top) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    this.size++;
  }

  // Return the value of the element on the top of the stack
  peek(): T | null {
    if (!this.top) {
      return null;
    }
    return this.top.value;
  }

  // Remove the element at the top of the stack, return its value
  pop(): T | null{
    if (!this.top) {
      return null;
    }
    const node = this.top;
    this.top = this.top.next;
    this.size--;
    return node.value;
  }

  // Returns the position of an element in the stack
  search(value: T): Number {
    let crawlNode = this.top;
    let counter = 1;
    while (crawlNode) {
      if (crawlNode.value === value) {
        return counter;
      }
      counter++;
      crawlNode = crawlNode.next;
    }
    return -1;
  }

}

class StackNode<T> {
  value: T;
  next: StackNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

