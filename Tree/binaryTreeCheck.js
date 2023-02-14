class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}

//Root of the Binary Tree
let root;

function isBST() {
  return isBSTUtil(root, Number.MIN_VALUE, Number.MAX_VALUE);
}

function isBSTUtil(node, min, max) {
  /* an empty tree is BST */
  if (node == null) return true;

  if (node.data < min || node.data > max) return false;

  return (
    isBSTUtil(node.left, min, node.data - 1) &&
    isBSTUtil(node.right, node.data + 1, max)
  );
}

/* Driver program to test above functions */
root = new Node(4);
root.left = new Node(10);
root.right = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(3);

if (isBST()) console.log("IS Binary serach tree");
else console.log("Not Binary serach tree");
