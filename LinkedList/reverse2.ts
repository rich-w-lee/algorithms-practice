import { createLinkedList, printLinkedList } from './helpers';
import { LinkedListNode } from './LinkedList';

export function reverse<T>(head: LinkedListNode<T>): LinkedListNode<T> | null{
  let prev: LinkedListNode<T> | null = null;
  let curr: LinkedListNode<T> | null  = head;
  let next: LinkedListNode<T> | null  = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

// Test
const t1 = reverse(createLinkedList('this is a test')!);
printLinkedList(t1!);
