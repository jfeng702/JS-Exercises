def urlify(str)
  split = str.split(' ')
  split.join('%20')
end

p urlify('mr john smith  ')
