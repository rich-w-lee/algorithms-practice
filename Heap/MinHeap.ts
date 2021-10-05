// Root node will be the smallest element
export class MinHeap {
  private capacity = 10;
  private size = 0;
  private items = new Array<number>(10);

  // Helper functions
  private getLeftChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 1;
  }

  private getRightChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 2;
  }

  private getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  private hasLeftChild(index: number): boolean {
    return this.getLeftChildIndex(index) < this.size;;
  }

  private hasRightChild(index: number): boolean {
    return this.getRightChildIndex(index) < this.size;
  }

  private hasParent(index: number): boolean {
    return this.getParentIndex(index) >= 0;
  }

  private leftChild(index: number): number {
    return this.items[this.getLeftChildIndex(index)];
  }

  private rightChild(index: number): number {
    return this.items[this.getRightChildIndex(index)];
  }

  private parent(index: number): number {
    return this.items[this.getParentIndex(index)];
  }

  private swap(index1: number, index2: number): void {
    const temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  }

  private ensureCapacity() {
    if (this.size === this.capacity) {
      const tempArray = new Array(this.capacity * 2);
      this.items.forEach((e, i) => tempArray[i] = e);
      this.items = tempArray;
      this.capacity *= 2;
    }
  }

  peek(): number | null {
    if(this.size === 0) { return null; }
    return this.items[0];
  }

  poll(): number | null {
    if(this.size === 0) { return null; }
    const item = this.items[0];
    this.items[0] = this.items[this.size - 1];
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
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }

  private heapifyUp(): void {
    let index = this.size - 1;
    while (this.hasParent(index) && this.parent(index) > this.items[index]) {
      this.swap(this.getParentIndex(index), index);
    }
  }

  add(value: number) {
    this.ensureCapacity();
    this.items[this.size] = value;
    this.size++;
    this.heapifyUp();
  }


  remove(value: number): number | null {
    if(this.size === 0) { return null; }

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

    const item = this.items[valIndex];
    this.items[valIndex] = this.items[this.size - 1];
    this.size--;
    this.heapifyDown();
    return item;

  }
}
