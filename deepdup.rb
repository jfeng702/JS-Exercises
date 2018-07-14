def flatten(arr)
  result = []
  arr.each do |el|
    if el.is_a?(Array)
      result += flatten(el)
    else
      result.push(el)
    end
  end
  result
end

def deepdup(arr)
  result = []
  arr.each do |el|
    if el.is_a?(Array)
      result.push(deepdup(el))
    else
      result.push(el)
    end
  end
  result
end


def shallowdup(arr)
  arr.dup
end

# p deepdup([1,2,3,[4]])
p flatten([1,2,[3]])
