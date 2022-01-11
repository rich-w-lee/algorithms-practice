import { BinaryTree, BinaryTreeNode } from './BinaryTree';
import { Queue } from '../StackAndQueue/Queue';

export function levelPrint2(tree: BinaryTree) {
  let q = new Queue<BinaryTreeNode>();
  q.add(tree.root);

  while (!q.empty()) {
    let node = q.poll();
    if (!node) break;
  
    console.log(node.value);
    if (node.left) q.add(node.left)
    if (node.right) q.add(node.right)
  }
}

// Test
const tree1 = new BinaryTree(3);
tree1.root.left = new BinaryTreeNode(2);
tree1.root.left.left = new BinaryTreeNode(1);
tree1.root.right = new BinaryTreeNode(5);
tree1.root.right.left = new BinaryTreeNode(4);
tree1.root.right.right = new BinaryTreeNode(6);

levelPrint2(tree1); // 3 2 5 1 4 6

