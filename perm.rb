def perm(arr)
  result = []
  permutate([], arr, result)
  p result
end

def permutate(current, remaining, result)
  if remaining.length == 0
    result.push(current)
  else
    i = 0
    while i < remaining.length
      current.push(remaining[i])
      permutate(current.dup, remaining[0...i].concat(remaining[i+1..-1]), result)
      current.pop
      i += 1
    end
  end
end

perm([1,2,3])
