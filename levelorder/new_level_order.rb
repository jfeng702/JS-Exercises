class TreeNode

  attr_accessor :val, :left, :right

  def initialize(val)
    @val = val
    @left = @right = nil
  end
end

def level_order(root)
  return [] if root.nil?

  result = []
  queue = []
  queue << root
  while queue.length > 0
    current = []
    size = queue.size
    i = 0
    while i < size
      current_node = queue.shift
      current << current_node.val
      queue << current_node.left if current_node.left
      queue << current_node.right if current_node.right
      i += 1
    end
    result << current
  end
  result
end

root = TreeNode.new(5)
root.left = TreeNode.new(3)
root.right = TreeNode.new(7)
root.left.left = TreeNode.new(2)
root.left.right = TreeNode.new(4)
root.right.left = TreeNode.new(6)
root.right.right = TreeNode.new(8)
p level_order(root)
