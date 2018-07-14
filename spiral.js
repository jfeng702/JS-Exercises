// output array in clockwise spiral from matrix

const coolMatrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

const coolerMatrix = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
];

// desired output:
// [1,2,3,6,9,8,7,4,5,6]

const spiral = matrix => {
  const result = [];

  let startRow = 0;
  let endRow = matrix.length - 1;
  let startCol = 0;
  let endCol = matrix[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      result.push(matrix[startRow][i]);
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      result.push(matrix[i][endCol]);
    }
    endCol--;
    for (let i = endCol; i >= startCol; i--) {
      result.push(matrix[endRow][i]);
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      result.push(matrix[i][startCol]);
    }
    startCol++;
  }
  console.log(result);
};

// spiral(coolMatrix);
spiral(coolerMatrix);
