class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  printLevelOrder() {
    if (!this.root) {
      return;
    }

// FIFO
    let queue = [];

    queue.push(this.root);

    while (queue.length > 0) {
      let node = queue.shift();
      console.log(node.data);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
}

let tree = new BinaryTree();
tree.root = new Node(5);
tree.root.left = new Node(3);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(4);

tree.root.right = new Node(7);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(8);
tree.printLevelOrder();

//      5
//   3     7
//  1 4   6 8

// print: 1, 0, 2
