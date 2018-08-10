# pale, ple => true
# pales, pale => true
# pale, bake => false

def one_away(str1, str2)
  return false if str1.length - str2.length > 1
  i = 0
  j = 0
  one_fail = false
  while i < str1.length || j < str2.length
    if str1[i] == str2[j]
      i += 1
      j += 1
    elsif str1[i] != str2[j]
      return false if one_fail
      one_fail = true
      if str1.length < str2.length
        j += 1
      elsif str1.length > str2.length
        i += 1
      else
        i += 1
        j += 1
      end
    end
  end
  true
end

p one_away('pale', 'ple')
p one_away('pales', 'pale')
p one_away('pale', 'bale')
p one_away('pale', 'bake')
