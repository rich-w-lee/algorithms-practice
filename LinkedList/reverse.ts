import { LinkedListNode } from './LinkedList';

export function reverseLinkedList<T>(head: LinkedListNode<T>): LinkedListNode<T> {
  let prev = null;
  let curr = head;
  let next = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next!;
  }
  return prev!;
}

const head = new LinkedListNode('m');
let crawlNode = head;
'naoglgaine'.split('').forEach((e) => {
  const node = new LinkedListNode(e);
  crawlNode.next = node;
  crawlNode = node;
});
const t1 = reverseLinkedList(head);
crawlNode = t1;
while (crawlNode) {
  console.log(crawlNode.value);
  crawlNode = crawlNode.next!;
}
