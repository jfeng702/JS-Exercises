# print level order using a queue

class Node

  attr_accessor :data, :left, :right

  def initialize(data)
    @data = data
    @left = @right = nil
  end
end

class BinaryTree

  attr_accessor :root

  def initialize
    @root = nil
  end

  def print_level_order
    if @root.nil?
      return
    end

    queue = []
    queue.push(@root)
    while queue.length > 0
      node = queue.shift
      p node.data
      if node.left
        queue.push(node.left)
      end

      if node.right
        queue.push(node.right)
      end
    end
  end
end

tree = BinaryTree.new
tree.root = Node.new(5)
tree.root.left = Node.new(3)
tree.root.left.left = Node.new(1)
tree.root.left.right = Node.new(4)

tree.root.right = Node.new(7)
tree.root.right.left = Node.new(6)
tree.root.right.right = Node.new(8)
tree.print_level_order

#         5
#      3    7
#    1  4  6  8
