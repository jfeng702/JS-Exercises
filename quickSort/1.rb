def swap(arr, i, j)
  temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
end

def quick_sort(arr, left = 0, right = arr.length - 1)

  pivot = partition(arr, left, right)
  if left < pivot - 1
    quick_sort(arr, left, pivot - 1)
  end

  if right > pivot + 1
    quick_sort(arr, pivot + 1, right)
  end
  arr
end

def partition(arr, left, right)
  pivot = right
  i = left
  j = left
  while j < right
    if arr[j] <= arr[pivot]
      swap(arr, i, j)
      i += 1
    end
    j += 1
  end
  swap(arr, i, j)
  i
end

p quick_sort([5,3,2,4,1])
