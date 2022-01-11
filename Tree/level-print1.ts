import { BinaryTree, BinaryTreeNode } from './BinaryTree';

export function levelPrint1(node: BinaryTreeNode) {
  const height = getTreeHeight(node);

  for (let i = 0; i < height; i++) {
    printLevel(node, i);
  }
}

function printLevel(node: BinaryTreeNode, level: number) {
  if (level === 0) {
    console.log(node.value);
    return;
  }
  if (node.left) printLevel(node.left, level - 1);
  if (node.right) printLevel(node.right, level - 1);
}

function getTreeHeight(node: BinaryTreeNode): number {
  let leftHeight = 1, rightHeight = 1;

  if (node.left) leftHeight = getTreeHeight(node.left) + 1;
  if (node.right) rightHeight = getTreeHeight(node.right) + 1;

  return Math.max(leftHeight, rightHeight);
}

// Test
const tree1 = new BinaryTree(3);
tree1.root.left = new BinaryTreeNode(2);
tree1.root.left.left = new BinaryTreeNode(1);
tree1.root.right = new BinaryTreeNode(5);
tree1.root.right.left = new BinaryTreeNode(4);
tree1.root.right.right = new BinaryTreeNode(6);

levelPrint1(tree1.root); // 3 2 5 1 4 6
