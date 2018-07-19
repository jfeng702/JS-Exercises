class TreeNode
  attr_accessor :left, :right, :val

  def initialize(val)
    @left = @right = nil
    @val = val
  end
end

def sorted_array_to_bst(a)
    convert_helper(a, 0, a.size-1)
end

def convert_helper(a, i, j)
    return nil if i > j
    mid = (i+j)/2
    root = TreeNode.new(a[mid])
    root.left = convert_helper(a, i, mid-1)
    root.right = convert_helper(a, mid+1, j)
    root
end

a = [1,2,3,4,5]
sorted_array_to_bst(a)
