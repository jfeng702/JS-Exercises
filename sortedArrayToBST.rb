


class TreeNode
  attr_accessor :left, :right, :val
  def initialize(val)
    @val = val
    @left = @right = nil
  end
end

class BST
  def sorted_array_to_bst(arr)
    if arr.length == 0
      return nil
    end

    mid = arr.length / 2
    node = TreeNode.new(arr[mid])
    node.left = sorted_array_to_bst(arr.slice(0, mid))
    node.right = sorted_array_to_bst(arr.slice(mid + 1..-1))

    node
  end

  def preorder(root)
    if root.nil?
      return nil
    end
    p root.val
    preorder(root.left)
    preorder(root.right)
  end
end

# node = TreeNode.new(1)
# p node

# //     3
# //   1   4
# //     2   5
# //
#

arr = [-10,-3,0,5,9]
# p BST.new.sorted_array_to_bst(arr)
tree = BST.new
node = tree.sorted_array_to_bst(arr)
# p node
tree.preorder(node)
