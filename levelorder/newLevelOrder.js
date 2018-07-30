//  this version separates out each level in separate sub arrays

  // Definition for a binary tree node.
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }


var levelOrder = function(root) {
  if (!root) {
    return;
  }
  let result = [];
  let stack = [];


  stack.push(root);
  while (stack.length > 0) {
    let current = [];
    let size = stack.length;
    for (let i = 0; i < size; i++) {
      let currentNode = stack.shift();
      current.push(currentNode.val);

      if (currentNode.left) {
        stack.push(currentNode.left);
      }

      if (currentNode.right) {
        stack.push(currentNode.right);
      }
    }
    result.push(current);
  }
  return result;
};

//      4
//   2    6
// 1  3  5  7
let node = new TreeNode(4);
node.left = new TreeNode(2);
node.right = new TreeNode(6);
node.left.left = new TreeNode(1);
node.left.right = new TreeNode(3);
node.right.left = new TreeNode(5);
node.right.right = new TreeNode(7);
console.log(levelOrder(node));
