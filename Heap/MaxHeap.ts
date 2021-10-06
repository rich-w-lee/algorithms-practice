import { Heap } from './Heap';

export class MaxHeap extends Heap {
  peek(): number | null {
    if(this.size === 0) return null;
    return this.items[0];
  }

  poll(): number | null {
    if(this.size === 0) return null;

    // Swap Root and Last Element
    const item = this.items[0];
    this.items[0] = this.items[this.size - 1];
    this.size--;

    this.heapifyDown();
    return item;
  }

  add(value: number) {
    this.ensureCapacity();
    this.items[this.size] = value;
    this.size++;
    this.heapifyUp();
  }

  remove(value: number): number | null {
    if (this.size === 0) return null;

    // Part 1: Find index
    let valIndex = -1;
    for (let i = 0; i < this.size; i++) {
      if (this.items[i] === value) {
        valIndex = i;
        break;
      }
    }
    if (valIndex < 0) {
      return null;
    }

    // Part 2: Remove, Heapify down
  
    // Move last node to the node to remove
    const item = this.items[valIndex];
    this.items[valIndex] = this.items[this.size - 1];

    this.size--;
    this.heapifyDown();
    return item;
  }

  private heapifyUp() {
    let index = this.size - 1;
    while (this.hasParent(index) && this.parent(index) < this.items[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  private heapifyDown() {
    let index = 0;

    // Use left child because children are added left to right
    while (this.hasLeftChild(index)) {
      let largerChildIndex = this.getLeftChildIndex(index);
      if (this.hasRightChild(index) && this.rightChild(index) > this.leftChild(index)) {
        largerChildIndex = this.getRightChildIndex(index);
      }

      if (this.items[index] > this.items[largerChildIndex]) {
        break;
      } else {
        this.swap(index, largerChildIndex);
      }
      index = largerChildIndex;
    }
  }
}
