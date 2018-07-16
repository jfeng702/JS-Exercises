function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var kthSmallest = function(node, k) {
  let arr = [];

  function inOrder(root) {
    if (root) {
      inOrder(root.left);
      arr.push(root.val);
      inOrder(root.right);
    }
  }
  inOrder(node);
  return arr[k-1];
};


let a = new TreeNode(5);
let b = new TreeNode(2);
let c = new TreeNode(3);
let d = new TreeNode(7);
let e = new TreeNode(1);

a.left = b;
a.right = d;
b.right = c;
b.left = e;

console.log(kthSmallest(a, 3));
