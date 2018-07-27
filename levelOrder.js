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
      this.printGivenLevel(this.root, i);
    }
  }

  height(root) {
    if (!root) {
      return 0;
    } else {
      let lheight = this.height(root.left);
      let rheight = this.height(root.right);

      if (lheight > rheight) {
        return lheight + 1;
      } else {
        return rheight + 1;
      }
    }
  }

  printGivenLevel(root, level) {
    if (!root) {
      return;
    }

    if (level === 1) {
      console.log(root.data + ' ');
    } else if (level > 1) {
      this.printGivenLevel(root.left, level - 1);
      this.printGivenLevel(root.right, level - 1);
    }
  }
}

//    1
// .5   2
//       3

let tree = new BinaryTree();
tree.root = new Node(1);
tree.root.right = new Node(2);
tree.root.right.right = new Node(3);
tree.root.left = new Node(.5);

tree.printLevelOrder();
// console.log(tree);
// console.log(Object.getOwnPropertyNames(tree));
