# find kth to last element of singly linked list

class Node
  attr_accessor :val, :next

  def initialize(val)
    @val = val
    @next =  nil
  end
end

def kth_to_last(head, k)
  counter = 1
  @head = head
  while head
    head = head.next
    counter += 1
  end

  counter_2 = 1
  head = @head
  while head
    if counter_2 == counter - k
      return head
    end
    head = head.next
    counter_2 += 1
  end
end

# recursive
def kth_to_last2(head,k)

  if head.nil?
    return 0
  end
  index = kth_to_last2(head.next, k) + 1
  if index == k
    p "#{k}rd to last node is #{head.val}"
  end
  index
end

head = Node.new(1)
head.next = Node.new(2)
head.next.next = Node.new(3)
head.next.next.next = Node.new(4)
head.next.next.next.next = Node.new(5)
head.next.next.next.next.next = Node.new(6)
head.next.next.next.next.next.next = Node.new(7)

p kth_to_last2(head, 3)
