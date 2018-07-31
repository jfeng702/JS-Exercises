
class DynamicProgramming

  def initialize
    @blair_cache = { 1 => 1, 2 => 2 }
  end

  # O(2^n) when recursive
  # O(n) after top-down tabulation

  # top-down
  def blair_nums(n)
    # return @blair_cache[n] if n == 1
    # return @blair_cache[n] if n == 2
    return @blair_cache[n] if @blair_cache[n]

    @blair_cache[n] = blair_nums(n-1) + blair_nums(n-2) + (n-2) * 2 + 1
    @blair_cache[n]
  end

  # O(n) after bottom-up memoization
  # bottom up
  def blair_cache_helper(n)
    cache = { 1 => 1, 2 => 2 }
    return cache if n < 3
    (3..n).each do |i|
      cache[i] = cache[i-1] + cache[i-2] + (i-2) * 2 + 1
    end
    cache
  end
  #
  # def blair_nums(n)
  #   cache = blair_cache_helper(n)
  #   cache[n]
  # end


  def frog_hops_bottom_up(n)
    cache =  frog_cache_builder(n)
    cache[n]
  end

  def frog_cache_builder(n)
    cache = {
      1 => [[1]],
      2 => [[1,1],[2]],
      3 => [[1,1,1],[1,2],[2,1],[3]]
    }

    return cache if n < 4
    (4..n).each do |i|
      # cache[i] =
      # cache[i-1].map {|ar| ar.concat([1])} +
      # cache[i-2].map {|ar| ar.concat([2])} +
      # cache[i-3].map {|ar| ar.concat([3])}
      current_hops = []
      cache[i-1].each do |arr|
        current_hops << (arr.dup << 1)
      end
      cache[i-2].each do |arr|
        current_hops << (arr.dup << 2)
      end
      cache[i-3].each do |arr|
        current_hops << (arr.dup << 3)
      end
      cache[i] = current_hops

    end
    cache
  end

  def frog_hops_top_down(n)
    @frog_cache = frog_hops_top_down_helper(n)
    return @frog_cache[n] if @frog_cache[n]
    current = []
    frog_hops_top_down(n-1).each do |arr|
        current << (arr.dup << [1])
    end
    frog_hops_top_down(n-2).each do |arr|
        current << (arr.dup << [2])
    end
    frog_hops_top_down(n-3).each do |arr|
        current << (arr.dup << [3])
    end
    @frog_cache[n] = current
    @frog_cache[n]
  end

  def frog_hops_top_down_helper(n)
    cache = {
      1 => [[1]],
      2 => [[1,1],[2]],
      3 => [[1,1,1],[1,2],[2,1],[3]]
    }
    cache
  end

  def super_frog_hops(n, k)

  end

  def knapsack(weights, values, capacity)

  end

  # Helper method for bottom-up implementation
  def knapsack_table(weights, values, capacity)

  end

  def maze_solver(maze, start_pos, end_pos)
  end
end
