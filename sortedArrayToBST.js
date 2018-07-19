
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

class BST {
  sortedArrayToBST(arr) {
    if (arr.length === 0) {
      return null;
    }

    let mid = Math.floor(arr.length / 2);
    let node = new TreeNode(arr[mid]);

    node.left = this.sortedArrayToBST(arr.slice(0, mid));
    node.right = this.sortedArrayToBST(arr.slice(mid + 1));
    return node;

  }

  preorder(root) {
    if (root === null) {
      return null;
    }
    console.log(root.val);
    this.preorder(root.left);
    this.preorder(root.right);
  }

}

// const sortedArrayToBST = (arr, start = 0, end = arr.length - 1) => {
//   if (start > end) {
//     return null;
//   }
//
//   let mid = Math.floor((start + end) / 2);
//   let node = new TreeNode(arr[mid]);
//
//   node.left = sortedArrayToBST(arr, start, mid - 1);
//   node.right = sortedArrayToBST(arr, mid + 1, end);
//   return node;
//
// };

//     3
//   1   4
//     2   5
//


const arr = [-10,-3,0,5,9];
let tree = new BST;
let node = tree.sortedArrayToBST(arr);
tree.preorder(node);
