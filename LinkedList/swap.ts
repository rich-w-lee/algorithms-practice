import { createLinkedList, printLinkedList } from './helpers';
import { LinkedListNode } from './LinkedList';

/**
 * Swaps the elements of a linked list
 */
export function swap<T>(head: LinkedListNode<T>) {
  let newHead = null;
  let prev: LinkedListNode<T> | null = null;
  let curr: LinkedListNode<T> = head;

  while(curr.next) {
    if (!prev) {
      prev = curr.next;
      newHead = prev;
    } else {
      prev.next = curr.next;
    }
  
    let nextNext = curr.next.next;
    curr.next.next = curr;
    curr.next = nextNext;

    // If no next next, we can't swap any more
    if (!nextNext) break;

    prev = curr;
    curr = nextNext;

  }

  return newHead;
}

// Test
const t1 = swap(createLinkedList('abcdef')!);
printLinkedList(t1!); // ba dc fe
