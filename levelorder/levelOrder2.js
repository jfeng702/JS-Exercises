class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  printLevelOrder() {
    let h = this.height(this.root);
    for(let i = 1; i <= h; i++) {
      // console.log(this.root);
      this.printGivenLevel(this.root, i);
    }
  }

  printGivenLevel(root, level) {
    if (!root) {
      return;
    }

    if (level === 1) {
      console.log(root.data);
    } else {
      this.printGivenLevel(root.left, level - 1);
      this.printGivenLevel(root.right, level - 1);
    }

  }

  height(root) {
    if (!root) {
      return 0;
    }
    let lheight = this.height(root.left);
    let rheight = this.height(root.right);
    if (lheight > rheight) {
      return lheight + 1;
    } else {
      return rheight + 1;
    }
  }
}

let tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(.5);
tree.root.right = new Node(2);
tree.root.right.right = new Node(3);
// console.log(tree.height(tree.root));
tree.printLevelOrder();
