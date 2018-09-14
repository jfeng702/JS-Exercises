class DynamicProgramming

  def initialize
    @blair_cache = {1 => 1, 2 => 2}
    @frog_cache = {
      1 => [[1]],
      2 => [[1,1],[2]],
      3 => [[3],[1,2],[2,1],[1,1,1]] }
  end

  def blair_nums(n)
    return @blair_cache[n] if @blair_cache[n]
    ans = blair_nums(n-1) + blair_nums(n-2) + ((n - 2) * 2 + 1)
    @blair_cache[n] = ans
    ans
  end

  def frog_hops_bottom_up(n)
    cache = frog_cache_builder(n)
    cache[n]
  end

  def frog_cache_builder(n)
    frog_cache = {
      1 => [[1]],
      2 => [[1,1],[2]],
      3 => [[3],[1,2],[2,1],[1,1,1]] }

    return frog_cache if n < 4

    (4..n).each do |k|
      current_set = []
      frog_cache[k-1].each do |array|
        current_set << (array.dup << 1)
      end

      frog_cache[k-2].each do |array|
        current_set << (array.dup << 2)
      end

      frog_cache[k-3].each do |array|
        current_set << (array.dup << 3)
      end
      frog_cache[k] = current_set
    end
    frog_cache
  end

  def frog_hops_top_down(n)
    @frog_cache = {
      1 => [[1]],
      2 => [[1,1],[2]],
      3 => [[3],[1,2],[2,1],[1,1,1]] }

    frog_hops_top_down_helper(n)
  end

  def frog_hops_top_down_helper(n)
    return @frog_cache[n] if @frog_cache[n]
    ans =
      frog_hops_top_down_helper(n-1).map {|arr| arr.dup << 1} +
      frog_hops_top_down_helper(n-2).map {|arr| arr.dup << 2} +
      frog_hops_top_down_helper(n-3).map {|arr| arr.dup << 3}

    @frog_cache[n] = ans
    ans
  end

  def super_frog_hops(n, k)
    # n = num_stairs
    # k = max_stairs
    # try max_stairs (k) = 4

    # @frog_cache = {
    #   0 => [[]],
    #
    #   1 => [[1]],
    #
    #   2 => [[1,1]],
    #
    #   2 => [[1,1], [2]],
    #
    #   3 => [[1,1,1]],
    #
    #   3 => [[1,2], [2,1], [1,1,1]],
    #
    #   3 => [[1,2], [2,1], [3], [1,1,1]]
    # }

    @frog_cache = {
      0 => [[]],
      1 => [[1]]
    }

    return @frog_cache[n] if @frog_cache[n]

    (2..n).each do |step|
      new_way = []
      (1..k).each do |el|
        break if step - el < 0
        @frog_cache[step-el].each do |el2|
          new_way << (el2.dup << el)
        end
      end
      @frog_cache[step] = new_way
    end
    @frog_cache[n]
  end

  def knapsack(weights, values, capacity)

  end

  # Helper method for bottom-up implementation
  def knapsack_table(weights, values, capacity)

  end

  def maze_solver(maze, start_pos, end_pos)
  end
end
