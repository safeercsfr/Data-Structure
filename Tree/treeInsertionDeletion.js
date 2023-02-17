class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  insertNode(root, newNode) {
    if (root.data > newNode.data) {
      if (root.left == null) root.left = newNode;
      else this.insertNode(root.left, newNode);
    } else {
      if (root.right == null) root.right = newNode;
      else this.insertNode(root.right, newNode);
    }
  }


  search(root, val) {
    if (!root) return false;
    else {
      if (root.data == val) return true;
      else if (val < root.data) return this.search(root.left, val);
      else return this.search(root.right, val);
    }
  }

  // root node, left, right
  preOrder(root) {
    if (root) {
      console.log(root.data);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  // left, root node, right
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.data);
      this.inOrder(root.right);
    }
  }

  // left, right, root node
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.data);
    }
  }

  //BFS
  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.data);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  }

  min(root) {
    if (!root.left) return root.data;
    else return this.min(root.left);
  }

  max(root) {
    if (!root.right) return root.data;
    else return this.max(root.right);
  }

  // delete the nodes
  delete(val) {
    this.root = this.deleteNode(this.root, val);
  }

  deleteNode(root, val) {
    if (root == null) return root;

    if (val < root.data) {
      root.left = this.deleteNode(root.left, val);
    } else if (val > root.data) {
      root.right = this.deleteNode(root.right, val);
    } else {
      if(!root.left && !root.right) return null

      if(!root.left) return root.right
      if(!root.right) return root.left

      root.data = this.min(root.right)
      root.right = this.deleteNode(root.right, root.data)
    }
    return root
  }

  height() {
    return this._heightNode(this.root);
  }

  _heightNode(node) {
    if (node === null) {
      return 0;
    } else {
      const leftHeight = this._heightNode(node.left);
      const rightHeight = this._heightNode(node.right);
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }
  
  validate(root = this.root,min = -Infinity, max = Infinity) {
    if (!root) return true;
    
    if (root.data < min || root.data > max) {
      return false;
    }
    
    return(
      this.validate(root.left, min, root.data ) && 
      this.validate(root.right, root.data, max)
    )
  }
}

const bst = new binarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
console.log('height:',bst.height());
console.log('validate:',bst.validate(bst.root));
// bst.insert(7);

// console.log("PRE ORDER");
// bst.preOrder(bst.root);

// console.log("IN ORDER");
// bst.inOrder(bst.root);

// console.log("POST ORDER");
// bst.postOrder(bst.root);

console.log("BFS");
bst.levelOrder(bst.root);
bst.delete(15);
console.log('AFTER');
bst.levelOrder(bst.root);

// console.log("MIN");
// console.log(bst.min(bst.root));

// console.log("MAX");
// console.log(bst.max(bst.root));

// console.log("empty", bst.isEmpty());
// console.log("value founded=", bst.search(bst.root, 10));
// console.log("value founded=", bst.search(bst.root, 20));
// console.log("value founded=", bst.search(bst.root, 40));
// console.log("value founded=", bst.search(bst.root, 30));
// console.log("value founded=", bst.search(bst.root, 50));
