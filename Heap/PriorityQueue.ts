declare class PQ<T> {
  size: number;
  comparer: CompareFunction<T>;
  add(val: T): void; 
  clear(): void;
  contains(val: T): boolean;
  peek(): T | null;
  poll(): T | null;
  remove(val: T): boolean;
}

declare type CompareFunction<T> = (a: T, b: T) => number;

/**
 * Priority Queue Implementation using a Max Heap
 */
export class PriorityQueue<T> implements PQ<T> {
  size = 0;
  private items: T[] = [];

  constructor(comparer?: CompareFunction<T>) {
    if (comparer) {
      this.comparer = comparer;
    }
  }

  /**
   * A function that compares two elements
   * Return 0 if the elements are the same
   * Return > 0 if the a is lower priority than b
   * Return < 0 if a is higher priority than b
   */
  comparer = (a: T, b: T): number => a > b ? 1 : -1;

  /**
   * Adds the given value to the Priority Queue
   * 
   * Time Complexity: O(logn)
   */
  add(val: T) {
    this.items[this.size] = val;
    this.size++;
    this.heapifyUp();
  }

  /**
   * Clears the items in the Queue
   * 
   * Time Complexity: O(1)
   */
  clear() {
    this.items = [];
    this.size = 0;
  }

  /**
   * Determines if the given value is in the Queue
   * 
   * Time Complexity: O(n)
   */
  contains(val: T): boolean {
    for (let i = 0; i < this.size; i++) {
      if (this.isEqual(val, this.items[i])) return true;
    }
    return false;
  }

  /**
   * Returns the element at the front of the Queue
   * 
   * Time Complexity: O(1)
   */
  peek(): T | null {
    if (!this.size) return null;
    return this.items[0];
  }

  /**
   * Returns and removes the element at the front of the Queue
   * 
   * Time Complexity: O(logn)
   */
  poll(): T | null {
    if (!this.size) return null;

    const item = this.items[0];

    // Replace the first element with the last element
    // And heapify down
    this.items[0] = this.items[this.size - 1];
    this.heapifyDown();

    this.size--;
    return item;
  }

  /**
   * Removes the given value from the Queue if present
   * 
   * Time Complexity: O(n)
   */
  remove(val: T): boolean {
    // Step 1: Find Index
    let valIndex = -1;
    for (let i = 0; i < this.size; i++) {
      if (this.isEqual(val, this.items[i])) {
        valIndex = i;
      }
    }

    if (valIndex < 0) return false;

    // Step 2: Swap with last element, heapify down
    this.items[valIndex] = this.items[this.size - 1];
    this.size--;
    this.heapifyDown();
    return true;
  }

  private isEqual(a: T, b: T): boolean {
    return this.comparer(a, b) === 0;
  }

  private isLessThan(a: T, b: T): boolean {
    return this.comparer(a, b) > 0;
  }

  private isGreaterThan(a: T, b: T): boolean {
    return this.comparer(a, b) < 0;
  }

  private getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  private getLeftChildIndex(index: number) {
    return (index * 2) + 1;
  }

  private getRightChildIndex(index: number) {
    return (index * 2) + 2;
  }

  private hasParent(index: number) {
    return this.getParentIndex(index) >= 0;
  }

  private hasLeftChild(index: number) {
    return this.getLeftChildIndex(index) < this.size;
  }

  private hasRightChild(index: number) {
    return this.getRightChildIndex(index) < this.size;
  }

  private swap(index1: number, index2: number) {
    const tmp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = tmp;
  }

  /**
   * Starting at the root node (most recently changed from poll/remove),
   * iteratively compare the node to it's children
   * While the node has a left child, find the larger of the children
   * Compare the root node with the larger child
   *    If root is larger than largest child, break
   *    Else, Swap current and largest child, set index to largest child's index (where root now is)
   */
  private heapifyDown() {
    // Start at root node
    let index = 0;

    while (this.hasLeftChild(index)) {
      // Find index of largest child
      let largerChildIndex = this.getLeftChildIndex(index);
      const leftChild = this.items[this.getLeftChildIndex(index)];
      const rightChild = this.items[this.getRightChildIndex(index)];
      if (this.hasRightChild(index) && this.isGreaterThan(rightChild, leftChild)) {
        largerChildIndex = this.getRightChildIndex(index);
      }

      // If Root is larger than largest child, break
      if (this.isGreaterThan(this.items[index], this.items[largerChildIndex])) {
        break;
      }
      // Otherwise, swap elements and continue moving down tree
      this.swap(index, largerChildIndex);
      index = largerChildIndex;
    }
  }

  /**
   * Starting at the last element (most recently added),
   * Compare the current element to its parent.
   * If the parent his higher, all good.
   * Otherwise, swap parent and current, set index to parent index (where current now is)
   */
  private heapifyUp() {
    let index = this.size - 1;

    while (this.hasParent(index)) {
      const parentIndex = this.getParentIndex(index);
      if (this.isGreaterThan(this.items[parentIndex], this.items[index])) {
        break;
      }
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }
}
