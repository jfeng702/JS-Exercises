function climbingStairs(i, n, cache = {}) {
  if (i === n) {
    return 1;
  }
  if (i > n) {
    return 0;
  }

  if (cache[i]) {
    return cache[i];
  }

  cache[i] = climbingStairs(i + 1, n, cache) + climbingStairs(i + 2, n, cache);
  return cache[i];
}

console.log(climbingStairs(0, 3));
