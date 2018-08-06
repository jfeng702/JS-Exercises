# iterative
# def is_happy(n)
#     hash = {}
#     while true
#       sum = 0
#       nums = n.to_s.chars.map {|el| el.to_i}.each {|el| sum += el ** 2}
#       return false if hash[sum]
#       return true if sum == 1
#       hash[sum] = true
#       n = sum
#     end
# end

# recursive
def is_happy(n)
  @arr = []
  sum = 0
  n.to_s.chars.map {|el| el.to_i}.each {|el| sum += el ** 2}
  return false if @arr.include?(sum)
  return true if sum == 1
  @arr << sum
  is_happy(sum)
end


p is_happy(19)
