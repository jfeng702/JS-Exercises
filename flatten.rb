def flatten(arr)
  result = []
  arr.each do |el|
    if el.is_a?(Array)
      result.concat(flatten(el))
    else
      result << el
    end
  end
  result
end

ar = [1,2,3,[4,5]]
p flatten(ar)
