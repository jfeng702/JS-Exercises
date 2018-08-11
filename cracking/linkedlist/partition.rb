# input: 3 => 5 => 8 => 5 => 10 => 2 => 1, partition = 5
# output: 3 => 1 => 2 => 10 => 5 => 5 => 8

class Node

  attr_accessor :val, :next

  def initialize(val)
    @val = val
    @next = nil
  end
end

head = Node.new(3)
head.next = Node.new(5)
head.next.next = Node.new(8)
head.next.next.next = Node.new(5)
head.next.next.next.next = Node.new(10)
head.next.next.next.next.next = Node.new(2)
head.next.next.next.next.next.next = Node.new(1)



def partition(head, x)
  before_start = nil
  before_end = nil
  after_start = nil
  after_end = nil

  while head
    nextt = head.next
    if head.val < x
      if before_start.nil?
        before_start = head
        before_end = before_start
      else
        before_end.next = head
        before_end = head
      end
    else
      if after_start.nil?
        after_start = head
        after_end = after_start
      else
        after_end.next = head
        after_end = head
      end
    end

    head = nextt
  end

  if before_start.nil?
    return after_start
  end
  before_end.next = after_start
  
  before_start
end

p partition(head, 5)
