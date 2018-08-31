// 1 or 2 steps

const climbingStairs = (n, start = 0) => {
  if (start === n) {
    return 1;
  } else if (start > n) {
    return 0;
  }
  return climbingStairs(n, start + 1) + climbingStairs(n, start + 2);
};

console.log(climbingStairs(1));
console.log(climbingStairs(2));
console.log(climbingStairs(3));
console.log(climbingStairs(4));
console.log(climbingStairs(5));
