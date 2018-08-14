class Fixnum
  # Fixnum#hash already implemented for you
end

class Array
  def hash
    count = 0
    self.each_with_index do |e,i|
      count += (e.ord * i)
    end
    count
  end
end

class String
  def hash
    count = 0
    self.each_char.with_index do |e,i|
      count += (e.ord * i)
    end
    count
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    count = 0
    self.keys.each do |key|
      count += key.to_s.ord
    end
    count
  end
end
