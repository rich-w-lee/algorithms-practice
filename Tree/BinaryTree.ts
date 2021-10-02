export class BinaryTree {
  public root: BinaryTreeNode

  constructor(value: number) {
    this.root = new BinaryTreeNode(value);
  }
}

export class BinaryTreeNode {
  public value: number;
  public left: BinaryTreeNode | null = null;
  public right: BinaryTreeNode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}
