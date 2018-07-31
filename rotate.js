// Given input
let matrix1 =
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
//
// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]

function rotate(matrix) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      matrix[row].push(matrix[matrix.length - 1 - col][row]);
    }
  }
  for (let row of matrix) {
    row.splice(0,matrix.length);
  }
}

console.log(matrix1);
rotate(matrix1);
console.log(matrix1);
