# tact coa => true
# permutations: 'taco cat'

# find out whether there is at most 1 odd frequency of char
def pali_perm(str)
  hash = Hash.new(0)
  str.each_char {|ch| hash[ch] += 1 unless ch == ' '}
  odd = false
  hash.values.each do |value|
    if value % 2 == 1
      return false if odd
      odd = true
    end
  end
  true
end

p pali_perm('tact coa')
