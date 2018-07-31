matrix1 =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
]

def rotate(matrix)
  row = 0
  while row < matrix.length
    col = 0
    while col < matrix.length
      matrix[row] << matrix[matrix.length - 1 - col][row]
      col += 1
    end
    row += 1
  end

  matrix.each do |row|
    row.slice!(0,matrix.length)
  end
end

p matrix1
rotate(matrix1)
p matrix1
