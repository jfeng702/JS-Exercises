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

def kth_smallest(arr, k, left = 0, right = arr.length - 1)
  if k > 0 && k <= right - left + 1
    pos = partition(arr, left, right)
    if pos - left == k - 1
      return arr[pos]
    end

# look to left of partition
    if pos - left > k - 1
      return kth_smallest(arr, k, left, pos - 1)
    end
# look to right of partition
  # k = k - (pos - left + 1)
    kth_smallest(arr, k - pos + left - 1, pos + 1, right )
  end
end

# O(n**2) worst case, but O(n) on average
# worst case is n calls, and doing a n linear scan each time
# average is halving the array each time, so becomes 1 + 1/2 + 1/4 + 1/8 ... => 1 + 1 => 2n
def kth_largest(arr, k, left = 0, right = arr.length - 1)
  if k > 0 && k <= right - left + 1
    pivot = partition(arr, left, right)
    if right - pivot  == k - 1
      return arr[pivot]
    end

    if right - pivot > k - 1
      return kth_largest(arr, k, pivot + 1, right)
    end
# [1,2,3,4,5]
# if pivot is arr[2]
# then k is k - (right - pivot + 1)
    kth_largest(arr, k - right + pivot - 1, left, pivot - 1)
  end
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

# p quick_sort([5,3,2,4,1])
# p kth_smallest([5,4,3,2,1], 4)
p kth_largest([5,4,3,2,1], 5)
