def string_comp(str)
  result = ''

  i = 0
  count = 1
  while i < str.length
    if str[i] != str[i+1]
      result += str[i] + count.to_s
      count = 1
    else
      count += 1
    end
    i += 1
  end
  result.length < str.length ? result : str
end

p string_comp('aabcccccaaa')
