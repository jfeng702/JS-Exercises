class Node


  MAX_BUFFER_SIZE = 5
  # val's max size is 5
  # implement add and insert

  attr_accessor :next, :val

  def initialize(arr)
    @next = nil
    @val = arr
  end

  def size
    @val.length
  end

  def add(ch)
    if size < MAX_BUFFER_SIZE
      @val << ch
    else
      if @next
        @next.add(ch)
      else
        @next = Node.new([ch])
      end
    end
  end

  def insert(ch, index)

    if index < size
      if size < MAX_BUFFER_SIZE
        @val = @val[0..index] + [ch] + @val[index+1..-1]
      else
        self.next = Node.new([ch] + @val[index+1..-1])
        @val = @val[0..index]
      end
    else
      index -= size
      @next.insert(ch, index)
    end
  end

end

root = Node.new(['h','e','l','l','o'])
root.next = Node.new(['t','h','e','r','e'])
p root
root.insert('m', 4)
root.insert('y', 4)
p root
