import { LinkedListNode } from './LinkedList';

export function createLinkedList(str: string): LinkedListNode<string> | null {
  let head: LinkedListNode<string> | null = null
  let crawlNode: LinkedListNode<string>;
  str.split('').forEach((e) => {
    if (!head) {
      head = new LinkedListNode(e);
      crawlNode = head;
      return;
    }
    const node = new LinkedListNode(e);
    crawlNode.next = node;
    crawlNode = node;
  });
  return head;
}

export function printLinkedList<T>(head: LinkedListNode<T>) {
  let crawlNode: LinkedListNode<T> | null = head;

  while (crawlNode) {
    console.log(crawlNode.value);
    crawlNode = crawlNode.next;
  }
}
