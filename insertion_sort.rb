def insert_sort(arr)
  arr.each_with_index do |el, idx|
    temp = el
    j = idx - 1
    while arr[j] > temp && j >= 0
      arr[j+1] = arr[j]
      j -= 1
    end
    arr[j+1] = temp
  end
end

array = [1,2,9,4,5]
p insert_sort(array)
