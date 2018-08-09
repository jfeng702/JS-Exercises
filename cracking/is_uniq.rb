# hello => false
# helo => true

def is_uniq(str)
  arr = str.chars.sort!
  arr.each_with_index do |el, i|
    if el == arr[i + 1]
      return false
    end
  end
  true
end

p is_uniq('hello')
p is_uniq('helo')
