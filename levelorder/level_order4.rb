# print level order using recursion

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
    h = height(self.root)
    i = 0
    while i <= h
      print_given_level(self.root, i)
      i += 1
    end
  end

  def height(root)
    return 0 if root.nil?

    lheight = height(root.left)
    rheight = height(root.right)
    if lheight > rheight
      return lheight + 1
    else
      return rheight + 1
    end
  end

  def print_given_level(root, level)
    return if root.nil?

    if level == 1
      p root.data
    else
      print_given_level(root.left, level - 1)
      print_given_level(root.right, level - 1)
    end
  end
end

#        4
#     2    6
#    1 3  5  7
tree = BinaryTree.new
tree.root = Node.new(4)
tree.root.left = Node.new(2)
tree.root.left.left = Node.new(1)
tree.root.left.right = Node.new(3)
tree.root.right = Node.new(6)
tree.root.right.left = Node.new(5)
tree.root.right.right = Node.new(7)
tree.print_level_order
