# top down
class Fibonacci
  def initialize
    @cache = {}
  end

  def fibs(n)
    return 0 if n == 0
    return 1 if n == 1

    return @cache[n] if @cache[n]
    @cache[n] = fibs(n-1) + fibs(n-2)
    @cache[n]
  end
end
#
# class Fibonacci
#   def initialize
#     @cache = { 1 => 1, 2 => 1 }
#   end
#
#   def fibs(n)
#     return @cache[n] unless @cache[n].nil?
#
#     @cache[n] = fibs(n-1) + fibs(n-2)
#     @cache[n]
#   end
# end
#
# def fib_cache_builder(n)
#   cache = {0 => 0,}
# end

times = []
50.times do
  start = Time.now
  a = Fibonacci.new
  p a.fibs(100)
  times << (Time.now - start) * 1000
end
p avg = times.reduce{|accum, el| accum + el} / times.length
