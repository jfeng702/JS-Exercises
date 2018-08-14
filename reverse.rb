# Input: 1->2->3->4->5->NULL
# Output: 5->4->3->2->1->NULL


class Node
  attr_accessor :val, :next

  def initialize(val)
    @val = val
    @next = nil
  end
end

head = Node.new(1)
head.next = Node.new(2)
head.next.next = Node.new(3)
head.next.next.next = Node.new(4)
head.next.next.next.next = Node.new(5)

# O(n) iterative
# def reverse(head)
#   prev = nil
#   while head
#     next_temp = head.next
#     head.next = prev
#     prev = head
#     head = next_temp
#   end
#   prev
# end

# public ListNode reverseList(ListNode head) {
#     if (head == null || head.next == null) return head;
#     ListNode p = reverseList(head.next);
#     head.next.next = head;
#     head.next = null;
#     return p;
# }

# 1 => 2 => 3 => 4 => 5

# recursive O(n) space O(n) time
# def reverse(head)
#   if head.nil? || head.next.nil?
#     return head
#   end
#   p = reverse(head.next)
#   head.next.next = head
#   head.next = nil
#   p
# end

# 1 => 2 => 3 => 4 => 5

# O(n) time, O(1) space
def reverse(head)
  prev = nil
  while head
    next_temp = head.next
    head.next = prev
    prev = head
    head = next_temp
  end
  prev
end

# remove all nodes with this val
def remove(val)

end










# def reverse(head)
#   prev = nil
#   curr = head
#   while curr
#     nextTemp = curr.next
#     curr.next = prev
#     prev = curr
#     curr = nextTemp
#   end
#   prev
#
# end

p reverse(head)
