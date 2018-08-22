# There are many ways to implement these methods, feel free to add arguments
# to methods as you see fit, or to create helper methods.
# require './bst_node'

class BinarySearchTree

  attr_accessor :root

  def initialize
    @root = nil
  end

  def insert(value)
    @root = insert_into_tree(@root, value)
  end

  def find(value, tree_node = @root)
    return nil if tree_node.nil?
    return tree_node if tree_node.value == value

    if value < tree_node.value
      find(value, tree_node.left)
    else
      find(value, tree_node.right)
    end
  end

  def delete(value)
    found = find(value)
    if found
      return @root = nil if found == @root
      if found.left.nil? && found.right.nil?
        if parent(value).left && parent(value).left.value == value
          parent(value).left = nil
        else
          parent(value).right = nil
        end
      elsif found.left && found.right
        
      end
    end
  end

  # helper method for #delete:
  def maximum(tree_node = @root)
    return tree_node if tree_node.right.nil?
    maximum(tree_node.right)
  end

  def depth(tree_node = @root)
  end

  def is_balanced?(tree_node = @root)
  end

  def in_order_traversal(tree_node = @root, arr = [])
  end


  def parent(val)
    parent_helper(@root, val)
  end

  private
  # optional helper methods go here:

  def insert_into_tree(tree_node, val)

    return BSTNode.new(val) if tree_node.nil?
    if val < tree_node.value
      tree_node.left = insert_into_tree(tree_node.left, val)
    else
      tree_node.right = insert_into_tree(tree_node.right, val)
    end
    tree_node
  end


  def parent_helper(node, val)
    if (node.left && node.left.value == val) ||
      (node.right && node.right.value == val)
      return node
    end

    if val < node.value
      parent_helper(node.left, val)
    else
      parent_helper(node.right, val)
    end
  end

end

#   3
# 1   5
#  2
# a = BinarySearchTree.new
# a.insert(3)
# a.insert(5)
# a.insert(1)
# a.insert(2)
# p a.parent(1)
