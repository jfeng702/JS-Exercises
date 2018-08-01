class ListNode
  attr_accessor :val, :next

  def initialize(val)
    @val = val
    @next = nil
  end
end

list = ListNode.new(1)
list.next = ListNode.new(3)
list.next.next = ListNode.new(4)

another = ListNode.new(3)
another.next = ListNode.new(3)
another.next.next = ListNode.new(5)

# 1 => 3 => 4
# 3 => 3 => 5

def merge_two_lists(l1, l2)
  l3 = ListNode.new(nil)
  head = l3
  while l1 || l2
    if l1 && !l2
      l3.next = l1
      l1 = l1.next
    elsif l2 && !l1
      l3.next = l2
      l2 = l2.next
    else
      if l1.val < l2.val
        l3.next = l1
        l1 = l1.next
      else l2.val < l1.val
        l3.next = l2
        l2 = l2.next
      end
    end
    l3 = l3.next
  end
  head.next
end

# iterative
# def merge_two_lists(l1, l2)
#   l3 = ListNode.new(nil)
#   dummy = l3
#   while l1 || l2
#     if !l1 && l2
#       l3.next = l2
#       l2 = l2.next
#     elsif l1 && !l2
#       l3.next = l1
#       l1 = l1.next
#     else
#       if l1.val < l2.val
#         l3.next = l1
#         l1 = l1.next
#       else
#         l3.next = l2
#         l2 = l2.next
#       end
#     end
#     l3 = l3.next
#   end
#   dummy.next
# end

# recursive
# def merge_two_lists(l1, l2)
#   return l2 if !l1
#   return l1 if !l2
#   if l1.val < l2.val
#     l1.next = merge_two_lists(l1.next, l2)
#     return l1
#   else
#     l2.next = merge_two_lists(l1, l2.next)
#     return l2
#   end
# end


p merge_two_lists(list, another)
