export class Heap { 
  protected capacity = 10;
  protected size = 0;
  protected items = new Array<number>(10);

  // Helper functions
  protected getLeftChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 1;
  }

  protected getRightChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 2;
  }

  protected getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  protected hasLeftChild(index: number): boolean {
    return this.getLeftChildIndex(index) < this.size;;
  }

  protected hasRightChild(index: number): boolean {
    return this.getRightChildIndex(index) < this.size;
  }

  protected hasParent(index: number): boolean {
    return this.getParentIndex(index) >= 0;
  }

  protected leftChild(index: number): number {
    return this.items[this.getLeftChildIndex(index)];
  }

  protected rightChild(index: number): number {
    return this.items[this.getRightChildIndex(index)];
  }

  protected parent(index: number): number {
    return this.items[this.getParentIndex(index)];
  }

  protected swap(index1: number, index2: number): void {
    const temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  }

protected ensureCapacity() {
    if (this.size === this.capacity) {
      const tempArray = new Array(this.capacity * 2);
      this.items.forEach((e, i) => tempArray[i] = e);
      this.items = tempArray;
      this.capacity *= 2;
    }
  }
}
