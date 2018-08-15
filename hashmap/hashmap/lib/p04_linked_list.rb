class Node
  attr_accessor :key, :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous node to next node
    # and removes self from list.
  end
end

class LinkedList
  def initialize
    @head = Node.new
    @tail = Node.new
    @head.next = @tail
    @tail.prev = @head
  end

  def [](i)
    each_with_index { |node, j| return node if i == j }
    nil
  end

  def first
    @head.next
  end

  def last
    @tail.prev
  end

  def empty?
    @head.next == @tail
  end

  def get(key)
    head = first
    while head
      return head.val if head.key == key
      head = head.next
    end
  end

  def include?(key)
  end

  def append(key, val)
    node = Node.new(key,val)
    prev = @tail.prev
    prev.next = node
    node.prev = prev
    node.next = @tail
    @tail.prev = node
  end

  def update(key, val)
    head = @head
    while head
      if head.key == key
        head.val = val
      end
      head = head.next
    end
  end

  def remove(key)
    head = first
    while head
      if head.key == key
        p head
        p head.prev
        head.prev.next = head.next
        head.next.prev = head.prev
      end
      head = head.next
    end
  end

  def each
  end

  # uncomment when you have `each` working and `Enumerable` included
  # def to_s
  #   inject([]) { |acc, node| acc << "[#{node.key}, #{node.val}]" }.join(", ")
  # end
end
