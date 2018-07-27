class Node

  attr_accessor :left, :right, :data

  def initialize(data)
    @data = data
    @left = nil
    @right = nil
  end
end

class BinaryTree

  attr_accessor :root

  def initialize
    @root = nil
  end

  def height(root)
    if root.nil?
      return 0
    end

    l_height = height(root.left)
    r_height = height(root.right)
    if l_height > r_height
      return l_height + 1
    else
      return r_height + 1
    end
  end

  def print_given_level(root, level)
    if root.nil?
      return
    end
    
    if level == 1
      p root.data
    else
      print_given_level(root.left, level - 1)
      print_given_level(root.right, level - 1)
    end

  end

  def print_level_order
    h = height(@root)
    i = 1
    while i <= h
      print_given_level(@root, i)
      i+= 1
    end
  end

end


tree = BinaryTree.new
tree.root = Node.new(1)
tree.root.left = Node.new(0.5)
tree.root.right = Node.new(2)
tree.root.right.right = Node.new(3)
tree.print_level_order
