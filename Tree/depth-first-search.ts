import { BinaryTree, BinaryTreeNode } from './BinaryTree';

enum DfsOrder {
  IN_ORDER,
  PRE_ORDER,
  POST_ORDER,
}

function depthFirstPrint(tree: BinaryTree, order = DfsOrder.IN_ORDER) {
  dfsNodePrint(tree.root, order);
}

function dfsNodePrint(node: BinaryTreeNode, order: DfsOrder) {
  if (order === DfsOrder.PRE_ORDER) {
    console.log(node.value)
  }
  if (node.left) {
    dfsNodePrint(node.left, order);
  }
  if (order === DfsOrder.IN_ORDER) {
    console.log(node.value)
  }
  if (node.right) {
    dfsNodePrint(node.right, order);
  }
  if (order === DfsOrder.POST_ORDER) {
    console.log(node.value)
  }
}

// Test
const tree1 = new BinaryTree(3);
tree1.root.left = new BinaryTreeNode(2);
tree1.root.left.left = new BinaryTreeNode(1);
tree1.root.right = new BinaryTreeNode(5);
tree1.root.right.left = new BinaryTreeNode(4);
tree1.root.right.right = new BinaryTreeNode(6);

depthFirstPrint(tree1, DfsOrder.IN_ORDER);
console.log('====');
depthFirstPrint(tree1, DfsOrder.PRE_ORDER);
console.log('====');
depthFirstPrint(tree1, DfsOrder.POST_ORDER);
