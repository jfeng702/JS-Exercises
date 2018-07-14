def find_pivot(arr)
  beginn = 0
  endd = arr.length - 1

  while beginn <= endd
    mid = ((beginn + endd) / 2.0).round
    if mid == 0 || arr[mid] < arr[mid-1]
      return mid
    end

    if arr[mid] > arr[0]
      beginn = mid + 1
    else
      endd = mid - 1
    end
    p mid
  end

  return 0
end

p find_pivot([1,2,3,4])
