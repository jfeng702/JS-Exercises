var kthSmallest = function(matrix, k) {
  // brute force, O(n)
  let arr = [];
  for (let row of matrix) {
    for (let el of row) {
      arr.push(el);
    }
  }
  return arr.sort((a,b) => a - b)[k-1];
};


// 8

console.log(kthSmallest([[1,5,9],[10,11,13],[12,13,15]], 8));
