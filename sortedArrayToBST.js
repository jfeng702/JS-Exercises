
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const sortedArrayToBST = (arr) => {
  if (arr.length === 0) {
    return null;
  }

  let mid = Math.floor(arr.length / 2);
  let node = new TreeNode(arr[mid]);

  node.left = sortedArrayToBST(arr.slice(0, mid));
  node.right = sortedArrayToBST(arr.slice(mid + 1));
  return node;

};

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
console.log(sortedArrayToBST(arr));
