require 'pry'

inputMatrix  = [ [1,    2,   3,  4,    5],
                 [6,    7,   8,  9,   10],
                 [11,  12,  13,  14,  15],
                 [16,  17,  18,  19,  20] ]

matrix = [[1,2]]
matrix2 = [ [1,2],
            [3,4]]


def spiral_copy(matrix)
  start_row = 0
  end_row = matrix.length - 1
  start_col = 0
  end_col = matrix[0].length - 1
  result = []
  while start_row <= end_row && start_col <= end_col
    i = start_col
    while i <= end_col
      result << matrix[start_row][i]
      i += 1
    end

    start_row += 1

    i = start_row
    while i <= end_row
      result << matrix[i][end_col]
      i += 1
    end

    end_col -= 1

    if end_row >= start_row
      i = end_col
      while i >= start_col
        result << matrix[end_row][i]
        i -= 1
      end
      end_row -= 1
    end


    if start_col <= end_col
      i = end_row
      while i >= start_row
        result << matrix[i][start_col]
        i -= 1
      end
      start_col += 1
    end

  end
  result
end

p spiral_copy(matrix2)


# output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]
