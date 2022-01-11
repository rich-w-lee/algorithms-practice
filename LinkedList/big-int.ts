import { LinkedList, LinkedListNode } from './LinkedList';

/**
 * BigInt format: A linked list that represents a number. Every element represents the 3 digits of a large number that
 * would be separated by a comma. Any leading zeros are ignored.
 * 
 * I.e.
 * 1,000:     1->0
 * 2,500,456  2->500->456
 * 2,005,456  2->5->456
 * 
 * Goal: Create a function that returns the mean of a list of BigInt data structures
 */


/**
 * Time Complexity: O(n * m)
 *  - n = size of bigInts array
 *  - m = size of bigInt LinkedList
 */
export function bigIntMean(bigInts: LinkedList<number>[]): number {
  // Divide by zero check
  if (bigInts.length === 0) {
    return 0;
  }

  // A variable to hold the number-ized sum of all the BigInts
  let sum = 0;

  // Loop through all the BigInts to collect their sum
  bigInts.forEach((bigInt) => {
    let currentNumber = 0;

    let currentNode = bigInt.head;
    while (currentNode) {
      // Multiple by 10^3 (to move the number to the next comma place)
      currentNumber = currentNumber * 10 ** 3;
      currentNumber += currentNode.value;
      currentNode = currentNode.next;
    }
    sum += currentNumber;
  });

  // Return the average
  return Math.round(sum / bigInts.length);
}

// Test Cases
function createBigInt(nums: number[]): LinkedList<number> {
  const bigInt = new LinkedList<number>();
  nums.forEach((n) => bigInt.add(n));
  return bigInt;
}

const t1 = createBigInt([123,4,12,999,2]);
const t2 = createBigInt([35,234,1,1,0]);
const t3 = createBigInt([481,241,1,1,0]);

// console.log(bigIntMean([t1,t2,t3])) // Expect = 213159671667001


/**
 * V2
 */
function bigIntMean3(l1: LinkedList<number>, l2: LinkedList<number>, l3: LinkedList<number>): number {
  // Goal: Pass through the columns in the lists and calculate the sum as we go and average at the end
  // Alternative: Calc average as we go w/ remainders. I opted not for this because it's more confusing
  // Assumption: Every list has the same length

  if (!l1.size) {
    return 0;
  }

  let c1 = l1.head;
  let c2 = l2.head;
  let c3 = l3.head;
  let total = 0;

  while(c1) {
    total *= (10 ** 3);
    total += (c1.value + c2!.value + c3!.value);

    // Move currents to next element in list
    c1 = c1.next;
    c2 = c2!.next;
    c3 = c3!.next;
  }

  return Math.round(total / 3);
}


function bigIntMean3v2(l1: LinkedList<number>, l2: LinkedList<number>, l3: LinkedList<number>): LinkedListNode<number> {

  let headNode: LinkedListNode<number> | null = null;
  let currNode: LinkedListNode<number>;
  let prevNode: LinkedListNode<number>;

  let c1 = l1.head;
  let c2 = l2.head;
  let c3 = l3.head;
  // let total = 0;
  let remainder = 0;

  while(c1) {
    // Move the previous currNode (since currNode hasn't been changed yet) to prevNode
    prevNode = currNode!;

    // Calculate total and average for this round
    let currTotal = c1.value + c2!.value + c3!.value + (remainder * 1000);
    let currAvg = Math.floor(currTotal / 3);

    // Create node for current number
    currNode = new LinkedListNode(currAvg % 1000);

    // Calculate remainder for this round
    remainder = currTotal % 3;

    if (prevNode) {
      // Carry the 
      prevNode.value += Math.floor(currAvg / 1000);
      prevNode.next = currNode;
    }

    if (!headNode) {
      headNode = currNode;
    }

    // Move currents to next element in list
    c1 = c1.next;
    c2 = c2!.next;
    c3 = c3!.next;
  }

  // Round last node's value as needed
  currNode!.value += Math.round(remainder / 3);

  // Print num just to be sure
  let testCurr = headNode;
  while (testCurr) {
    console.log(testCurr.value);
    testCurr = testCurr.next;
  }

  return headNode!;
}

// Test
const time1 = process.hrtime();

// console.log(bigIntMean3(t1,t2,t3), `Time: ${process.hrtime(time1)}`) // Expect = 213159671667001

console.log(bigIntMean3v2(t1,t2,t3), `Time: ${process.hrtime(time1)}`) // Expect = 213159671667001

// console.log(bigIntMean([t1,t2,t3]), `Time: ${process.hrtime(time1)}`) // Expect = 213159671667001
