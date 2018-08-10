class Node
  attr_accessor :val, :next

  def initialize(val)
    @val = val
    @next = nil
  end
end


# A => B => C => D => E
# given C, return A => B => D => E

# O(constant)
def delete_mid(mid_node)
  if mid_node.nil? || mid_node.next.nil?
    return false
  end
  mid_node.val = mid_node.next.val
  mid_node.next = mid_node.next.next
  true
end


head = Node.new(1)
head.next = Node.new(2)
mid = head.next.next = Node.new(3)
head.next.next.next = Node.new(4)
head.next.next.next.next = Node.new(5)
head.next.next.next.next.next = Node.new(6)

delete_mid(mid)
p head
