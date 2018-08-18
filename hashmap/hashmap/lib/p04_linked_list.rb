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
    self.prev.next = self.next if self.prev
    self.next.prev = self.prev if self.next
    self.next = nil
    self.prev = nil
    self
  end
end

class LinkedList
  include Enumerable

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
    nil
  end

  def include?(key)
    head = first
    while head
      if head.key == key
        return true
      end
      head = head.next
    end
    false
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
        head.prev.next = head.next
        head.next.prev = head.prev
      end
      head = head.next
    end
  end

  def each
    current_node = @head.next
    until current_node == @tail
      yield current_node
      current_node = current_node.next
    end
  end

  # uncomment when you have `each` working and `Enumerable` included
  def to_s
    inject([]) { |acc, node| acc << "[#{node.key}, #{node.val}]" }.join(", ")
  end
end
