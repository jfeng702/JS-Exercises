def find_duplicate(nums)
  one = nums.first
  two = nums.first
  while true
    one = nums[one]
    two = nums[nums[two]]
    break if one == two

  # p "#{one} one"
  # p "#{two} two"
  end

  ptr1 = nums.first
  ptr2 = one
  while ptr1 != ptr2
    ptr1 = nums[ptr1]
    ptr2 = nums[ptr2]
  end
  ptr1
end

# O(n)
# def find_duplicate(nums)
#   hash = {}
#   nums.each do |el|
#     return el if hash[el]
#     hash[el] = true
#   end
# end

arr = [1,3,3,2]

p find_duplicate(arr)
