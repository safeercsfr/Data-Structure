class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isSameTree(tree1, tree2) {
  if (!tree1 && !tree2) return true;
  if (!tree1 || !tree2) return false;
  if (tree1.val !== tree2.val) return false;
  return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right);
}

// Define the first tree
let tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);
tree1.left.left = new TreeNode(4);
tree1.left.right = new TreeNode(5);

// Define the second tree
let tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);
tree2.left.left = new TreeNode(4);
tree2.left.right = new TreeNode(5);

// Call the function to compare the trees
let result = isSameTree(tree1, tree2);

console.log(result); // true
