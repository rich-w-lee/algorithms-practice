import { Heap } from './Heap';

// Root node will be the smallest element
export class MinHeap extends Heap {
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
    if(this.size === 0) return null;

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

    // Part 2: Remove, Heapify Down

    // Move last node to the node to remove
    const item = this.items[valIndex];
    this.items[valIndex] = this.items[this.size - 1];

    this.size--;
    this.heapifyDown();
    return item;
  }

  private heapifyDown(): void {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.items[index] < this.items[smallerChildIndex]) {
        break;
      } 
      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }

  private heapifyUp(): void {
    let index = this.size - 1;
    while (this.hasParent(index)) {
      if (this.parent(index) < this.items[index]) {
        break;
      }
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }
}
