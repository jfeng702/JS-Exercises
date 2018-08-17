require_relative 'p02_hashing'
require_relative 'p04_linked_list'

class HashMap
  include Enumerable
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { LinkedList.new }
    @count = 0
  end

  def include?(key)
    bucket = bucket(key)
    bucket.include?(key) == true
  end

  def set(key, val)
    # bucket = bucket(key)
    if include?(key)
      bucket(key).update(key, val)
    else
      @count += 1
      resize! if @count > num_buckets
      bucket(key).append(key, val)
    end
  end

  def get(key)
    head = @store[key.hash % num_buckets]
    head.get(key)
  end

  def delete(key)
    if include?(key)
      bucket(key).remove(key)
      @count -= 1
    end
  end

  def each
    @store.each do |bucket|
      bucket.each do |node|
        yield [node.key, node.val]
      end
    end
  end

  # uncomment when you have Enumerable included
  def to_s
    pairs = inject([]) do |strs, (k, v)|
      strs << "#{k.to_s} => #{v.to_s}"
    end
    "{\n" + pairs.join(",\n") + "\n}"
  end

  alias_method :[], :get
  alias_method :[]=, :set

  private

  def num_buckets
    @store.length
  end

  def resize!
    old_store = @store
    new_store = Array.new(num_buckets * 2) { LinkedList.new }
    @store = new_store
    @count = 0
    old_store.each do |bucket|
      bucket.each do |node|
        set(node.key, node.val)
      end
    end
  end

  def bucket(key)
    # optional but useful; return the bucket corresponding to `key`
    @store[key.hash % num_buckets]
  end
end
