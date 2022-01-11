import { BinaryTree, BinaryTreeNode } from './BinaryTree';

export function dfsPrint(node: BinaryTreeNode) {
  console.log(node.value);
  if (node.left) dfsPrint(node.left);
  if (node.right) dfsPrint(node.right);
}

// Test
const tree1 = new BinaryTree(3);
tree1.root.left = new BinaryTreeNode(2);
tree1.root.left.left = new BinaryTreeNode(1);
tree1.root.right = new BinaryTreeNode(5);
tree1.root.right.left = new BinaryTreeNode(4);
tree1.root.right.right = new BinaryTreeNode(6);

dfsPrint(tree1.root); // 3 2 1 5 4 6

