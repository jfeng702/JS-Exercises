// 1 or 2 steps

// brute force
// const climbingStairs = (n, start = 0) => {
//   if (start === n) {
//     return 1;
//   } else if (start > n) {
//     return 0;
//   }
//   return climbingStairs(n, start + 1) + climbingStairs(n, start + 2);
// };

const climbingStairs = (n, start = 0, memo = {}) => {

  if (start === n) {
    return 1;
  }
  if (start > n) {
    return 0;
  }
  if (memo[start] > 0) {
    return memo[start];
  }

  memo[start] = climbingStairs(n, start + 1, memo) + climbingStairs(n, start + 2, memo);
  return climbingStairs(n, start + 1) + climbingStairs(n, start + 2);
};

console.log(climbingStairs(1));
console.log(climbingStairs(2));
console.log(climbingStairs(3));
console.log(climbingStairs(4));
console.log(climbingStairs(5));
