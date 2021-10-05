export class LinkedListNode<T> {
  public value: T;
  public next: LinkedListNode<T> | null = null;
  
  constructor(value: T) {
    this.value = value;
  }
}

export class LinkedList<T> {
  head: LinkedListNode<T> | null = null;
  size = 0;

  add(element: T) {
    // Create new node
    const eNode = new LinkedListNode<T>(element);
    // Set head if it doesn't exist
    if (!this.head) {
      this.head = eNode;
      this.size++;
      return;
    }

    // Start at head
    let current = this.head;
    // Find last node
    while (current.next) {
      current = current.next;
    }
    // Set next of last node to new node
    current.next = eNode;
    this.size++;
  }
}
