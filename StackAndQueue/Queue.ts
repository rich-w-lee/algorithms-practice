export class Queue<T> {
  head: QueueNode<T> | null = null;
  tail: QueueNode<T> | null = null;
  size = 0;

  empty(): boolean {
    return this.head === null;
  }

  // Add a value to the end of the list
  add(value: T) {
    const node = new QueueNode(value);
    if (!this.head || !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  // Returns, but does not remove, the value at the head of the queue
  peek(): T | null {
    if (!this.head) {
      return null;
    }
    return this.head.value;
  }

  // Returns and removes the value at the head of the queue
  poll(): T | null {
    if (!this.head) {
      return null;
    }
    const node = this.head;
    this.head = node.next;
    return node.value;
  }
}

class QueueNode<T> {
  value: T;
  next: QueueNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}
