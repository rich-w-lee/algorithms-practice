import { BinaryTree, BinaryTreeNode } from './BinaryTree';

function sameTree(tree1: BinaryTree, tree2: BinaryTree): boolean {
  return sameTreeNode(tree1.root, tree2.root);
}

function sameTreeNode(node1: BinaryTreeNode, node2: BinaryTreeNode): boolean {
  let leftValid = true;
  let rightValid = true;

  // Check values
  if (node1.value !== node2.value) {
    return false;
  }

  // Check that children existence is the same
  if (
    (node1.left === null && node2.left !== null) &&
    (node1.right !== null && node2.left === null) &&
    (node1.left === null && node2.right !== null) &&
    (node1.right !== null && node2.right === null)
  ) {
    return false;
  }

  // Validate left children
  if (node1.left && node2.left) {
    leftValid = sameTreeNode(node1.left, node2.left);
  }

  if (node1.right && node2.right) {
    rightValid = sameTreeNode(node1.right, node2.right);
  }

  return leftValid && rightValid;
}


// Test
const tree1 = new BinaryTree(3);
tree1.root.left = new BinaryTreeNode(2);
tree1.root.left.left = new BinaryTreeNode(1);
tree1.root.right = new BinaryTreeNode(5);
tree1.root.right.left = new BinaryTreeNode(4);
tree1.root.right.right = new BinaryTreeNode(6);

const tree2 = new BinaryTree(3);
tree2.root.left = new BinaryTreeNode(2);
tree2.root.left.left = new BinaryTreeNode(1);
tree2.root.right = new BinaryTreeNode(4);
tree2.root.right.left = new BinaryTreeNode(5);
tree2.root.right.right = new BinaryTreeNode(6);

const tree3 = new BinaryTree(3);
tree3.root.left = new BinaryTreeNode(2);
tree3.root.left.left = new BinaryTreeNode(1);
tree3.root.right = new BinaryTreeNode(5);
tree3.root.right.left = new BinaryTreeNode(6);
tree3.root.right.right = new BinaryTreeNode(1);

console.log(sameTree(tree1, tree2));
console.log(sameTree(tree1, tree3));
console.log(sameTree(tree3, tree2));
console.log(sameTree(tree1, tree1));
console.log(sameTree(tree2, tree2));
console.log(sameTree(tree3, tree3));
