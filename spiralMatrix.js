function spiralCopy(inputMatrix) {
  let startCol = 0;
  let endCol = inputMatrix[0].length - 1;
  let startRow = 0;
  let endRow = inputMatrix.length - 1;

  const result = [];

  while (startRow <= endRow && startCol <= endCol){

    for(let i = startCol; i <= endCol; i++) {
      result.push(inputMatrix[startRow][i]);
      console.log('a');
    }
    startRow++;
    for(let i = startRow; i <= endRow; i++) {
      result.push(inputMatrix[i][endCol]);
      console.log('b');
    }
    endCol--;
    if (startRow <= endRow) {
      for(let i = endCol; i >= startCol; i--) {
        result.push(inputMatrix[endRow][i]);
        console.log('c');
      }
      endRow--;
    }
    for(let i = endRow; i >= startRow; i--) {
      result.push(inputMatrix[i][startCol]);
      console.log('d');
    }
    startCol++;
  }

  return result;

}

console.log(spiralCopy([[1,2]]));
