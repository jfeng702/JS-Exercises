def top_k_frequent(nums, k)
  hash = Hash.new(0)
  nums.each do |el|
    hash[el] += 1
  end
  hash.keys.sort_by {|k| hash[k]}.reverse[0...k]
end

nums = [1,1,1,2,2,3]
p top_k_frequent(nums, 2)
# [1,2]
