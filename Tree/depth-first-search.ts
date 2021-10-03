import { BinaryTree, BinaryTreeNode } from './BinaryTree';

function containsDepthFirst(tree: BinaryTree, value: number): boolean {
  return containsDFNode(tree.root, value);
}

function containsDFNode(node: BinaryTreeNode, value: number): boolean {
  if (node.value === value) {
    return true;
  }

  let leftContains = false;
  if (node.left) {
    leftContains = containsDFNode(node.left, value);
  }

  if (leftContains) {
    return true;
  }

  let rightContains = false;
  if (node.right) {
    rightContains = containsDFNode(node.right, value);
  }

  if (rightContains) {
    return true;
  }

  return false;
}


// Test
// Test
const tree1 = new BinaryTree(3);
tree1.root.left = new BinaryTreeNode(2);
tree1.root.left.left = new BinaryTreeNode(1);
tree1.root.right = new BinaryTreeNode(5);
tree1.root.right.left = new BinaryTreeNode(4);
tree1.root.right.right = new BinaryTreeNode(6);

console.log(containsDepthFirst(tree1, 3));
console.log(containsDepthFirst(tree1, 6));
console.log(containsDepthFirst(tree1, 0));
