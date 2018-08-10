class Node

  attr_accessor :val, :next

  def initialize(val)
    @val = val
    @next = nil
  end
end


def remove_dup(head)
  @head = head
  seen = {}
  prev = nil
  while head
    if seen[head.val]
      prev.next = head.next
    else
      seen[head.val] = true
      prev = head
    end
    head = head.next
  end
  @head
end


head = Node.new(1)
head.next = Node.new(2)
head.next.next = Node.new(2)
head.next.next.next = Node.new(2)
head.next.next.next.next = Node.new(3)

p remove_dup(head)
