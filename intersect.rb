def intersect(nums1, nums2)
    result = []
    hash = Hash.new(0)
    nums1.each do |el|
      hash[el] += 1
    end

    nums2.each do |el|
      if hash[el] > 0
        hash[el] -=1
        result << el
      end
    end
    result
end
