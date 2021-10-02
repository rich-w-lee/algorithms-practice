import { BinaryTree, BinaryTreeNode } from './BinaryTree';

function isValidBST(tree: BinaryTree): boolean {
  // The only way you can tell if a tree is valid is if you look at every node
  // Therefore we will recurse on the root node's children to see if they're valid
  return isValidNode(tree.root);
}

function isValidNode(node: BinaryTreeNode): boolean {
  // Assume the left and right are valid in case there is no node for them
  let leftValueValid = true;
  let rightValueValid = true;

  if (node.left) {
    leftValueValid = node.left.value <= node.value;
  }

  if (node.right) {
    rightValueValid = node.right.value >= node.value;
  }

  // If both children values are valid, validate their children
  if (leftValueValid && rightValueValid) {
    let leftNodeValid = true;
    let rightNodeValid = true;
    
    if (node.left) {
      leftNodeValid = isValidNode(node.left);
    }
    if (node.right) {
      rightNodeValid = isValidNode(node.right);
    }

    return leftNodeValid && rightNodeValid;
  }

  // If the left or right value is not valid, this node is not valid
  return false;
}

// Test 1 - Valid Tree
const tree1 = new BinaryTree(3);
tree1.root.left = new BinaryTreeNode(2);
tree1.root.left.left = new BinaryTreeNode(1);
tree1.root.right = new BinaryTreeNode(5);
tree1.root.right.left = new BinaryTreeNode(4);
tree1.root.right.right = new BinaryTreeNode(6);

console.log(isValidBST(tree1));

// Test 2 - Valid Tree
const tree2 = new BinaryTree(3);
tree2.root.left = new BinaryTreeNode(2);
tree2.root.left.left = new BinaryTreeNode(1);
tree2.root.right = new BinaryTreeNode(4);
tree2.root.right.left = new BinaryTreeNode(5);
tree2.root.right.right = new BinaryTreeNode(6);

console.log(isValidBST(tree2));

// Test 3 - Valid Tree
const tree3 = new BinaryTree(3);
tree3.root.left = new BinaryTreeNode(2);
tree3.root.left.left = new BinaryTreeNode(1);
tree3.root.right = new BinaryTreeNode(5);
tree3.root.right.left = new BinaryTreeNode(6);
tree3.root.right.right = new BinaryTreeNode(1);

console.log(isValidBST(tree3));
