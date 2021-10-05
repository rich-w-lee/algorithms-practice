import { LinkedListNode } from './LinkedList';

/**
 * Given a linked list L, divide into multiple buckets within k elements each.
 * First reverse k elements in each bucket, follow by swapping buckets in each pair.
 * 
 * Ex.
 * LinkedList: m -> n -> a -> o -> g -> l -> g -> a -> i -> n -> e
 * k = 3
 * 
 * output: l g o a n m e n i a g
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n) => Can do better by doing stuff in place
 */
function reverseSwap1(head: LinkedListNode<string>, k: number): LinkedListNode<string> {
  // Edge Case 1: K = 1 or 0
  if (k <= 1) return head;

  // Step 1: Put in groups
  // O(n) n = size of list
  let groups: LinkedListNode<string>[][] = [];
  let currentGroup: LinkedListNode<string>[] = [];

  let crawlNode = head;

  while (crawlNode) {
    currentGroup.push(crawlNode);
    
    if (currentGroup.length === k) {
      groups.push(currentGroup);
      currentGroup = [];
    }
    crawlNode = crawlNode.next!;
  }

  if (currentGroup.length) {
    groups.push(currentGroup);
  }

  // Step 2: Reverse Groups
  // O(n)
  for (let i = 0; i < groups.length; i++) {
    groups[i] = groups[i].reverse();
  }

  // Step 3: Swap Groups
  // O(n)
  for (let i = 0; i < groups.length; i+=2) {
    let tmp = groups[i];
    groups[i] = groups[i+1];
    groups[i+1] = tmp;
  }

  // Step 4: Fix LinkedList connections
  // O(n)
  const newHead = groups[0][0];
  let newCrawl = newHead;
  
  for (let i = 0; i < groups.length; i++) {
    const group = groups[i];
    for (let j = 0; j < group.length; j++) {
      if (i === 0 && j === 0) continue;
      newCrawl.next = group[j];
      newCrawl = group[j];
    }
  }
  newCrawl.next = null;

  return newHead;
}

/**
 * Reverses the elements of group k as we work through the list
 */
function reverseV1(head: LinkedListNode<string>, k: number): LinkedListNode<string> {
  if (k === 1) return head;

  let newHead: LinkedListNode<string> | null = head;
  let curr: LinkedListNode<string> | null = head;
  let next: LinkedListNode<string> | null = head.next;

  // Used to keep track of the new head of the list (kth element of the list)
  let initialGroupHead: LinkedListNode<string> | null = head;
  let nextGroupEnd: LinkedListNode<string> | null = null;

  // ( 1 - 2 - 3 ) - 4 - 5 - null
  // ( 3 - 2 - 1 ) - (5 - 4) - null

  // Work through list, reverse as we go
  let counter = 1;

  while (next) {
    let tmp = next.next;
    
    if (counter % k != 0) {
      next.next = curr;
    } else {
      if (nextGroupEnd) {
        nextGroupEnd.next = curr;
      } else {
        newHead = curr;
      }
      nextGroupEnd = initialGroupHead;
      initialGroupHead = next;
    }

    curr = next;
    next = tmp;
    counter++;
  }

  if (counter % k !== 0 || counter === k) {
    if (nextGroupEnd) {
        nextGroupEnd.next = curr;
    } else {
      newHead = curr;
    }
    initialGroupHead.next = null;
  }
  return newHead;
}

function reverseV2(head: LinkedListNode<string>, k: number): LinkedListNode<string> | null {
  if (head === null) { return null; }
  let prev: LinkedListNode<string> | null = null;
  let next: LinkedListNode<string> | null = null;
  let curr: LinkedListNode<string> | null = head;

  let count = 0;

  while (count < k && curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    count++;
  }

  // Update head (which is now our tail) to point to the reversed of the next part of the list
  if (next) {
    head!.next = reverseV2(next, k);
  }

  return prev!;
}

function reverseV3(head: LinkedListNode<string>, k: number): LinkedListNode<string> {
  if (k === 1) return head;

  let result: LinkedListNode<string> | null = null;
  let curr: LinkedListNode<string> | null = head;

  let groupHead = new LinkedListNode<string>('');
  groupHead.next = curr;
  let next = curr.next;

  // ( 1 - 2 - 3 ) - 4 - 5 - null
  // ( 3 - 2 - 1 ) - (5 - 4) - null

  let count = 1;
  while (next) {
    count++;

    // Update pointers to move through list
    let tmp = next.next;
    next.next = curr;
    curr = next;
    next = tmp;

    if (count === k) {
      count = 1;

      if (!result) {
        result = curr;
      }

      // Join reversed k group with rest of list
      tmp = groupHead.next;
      tmp!.next = next;
      groupHead.next = next;
      groupHead = tmp!;

      // Move to next k group
      curr = next;
      if (curr) {
        next = curr.next;
      }
    }
  }
   // Finish up last group
   let tmp = groupHead.next;
   if (tmp) {
     tmp.next = null;
   }
   head.next = curr;

   return result!;
}


function swap(head: LinkedListNode<string>, k: number): LinkedListNode<string> {
  return head;
}

function reverseSwap2(head: LinkedListNode<string>, k: number): LinkedListNode<string> {
  if (k === 0) {
    return head;
  }

  return swap(
    reverseV3(head, k)!,
    k
  );
}

// Test
// Create linked list
const head = new LinkedListNode('1');
let crawlNode = head;
'2345'.split('').forEach((e) => {
  const node = new LinkedListNode(e);
  crawlNode.next = node;
  crawlNode = node;
})
const t1 = reverseSwap2(head, 3);
console.log('t1');
crawlNode = t1;
while (crawlNode) {
  console.log(crawlNode.value);
  crawlNode = crawlNode.next!;
}
