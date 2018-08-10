class Node

  attr_accessor :val, :next

  def initialize(val)
    @val = val
    @next = nil
  end
end


# O(n) time
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

# no buffer but O(n^2) time

# 1 => 2 => 2 => 7

def remove_dup2(head)
  @head = head
  while head
    runner = head.next
    prev = head
    while runner
      if runner.val == head.val
        prev.next = runner.next
      else
        prev = runner
      end
      runner = runner.next
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

p remove_dup2(head)
