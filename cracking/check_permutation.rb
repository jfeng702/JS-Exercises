def permutation(str1,str)
  str1.chars.sort == str.chars.sort
end

p permutation('hel', 'elh')
p permutation('hei', 'hel')
