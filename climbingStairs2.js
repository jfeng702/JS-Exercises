function climbingStairs(i, n) {
  if (i === n) {
    return 1;
  }

  if (i > n) {
    return 0;
  }
  return climbingStairs(i + 1, n) + climbingStairs(i + 2, n);
}

console.log(climbingStairs(0, 3));
