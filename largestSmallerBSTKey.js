class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

// why did it not work before
  largestSmaller(root, num) {
    let key = -1;
    while (root) {
      if (root.data < num) {
        key = root.data;
        root = root.right;
      } else {
        root = root.left;
      }
    }
    return key;
  }

  smallestLarger(root, num) {
    let key = -1;
    while (root) {
      if (root.data > num) {
        key = root.data;
        root = root.left;
      } else {
        root = root.right;
      }
    }
    return key;
  }
}

//    5
//  2  7
// 1 3

const bst = new BST();
bst.insert(5);
bst.insert(2);
bst.insert(1);
bst.insert(3);
bst.insert(7);
// console.log(bst.largestSmaller(bst.root, 9));
console.log(bst.smallestLarger(bst.root, 4));
