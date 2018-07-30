// top down
let cache = [];

function fibs(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  if (cache[n]) {
    return cache[n];
  }

  cache[n] = fibs(n-1) + fibs(n-2);
  return cache[n];
}

// // bottoms up
// let cache = {};
//
// // [0,1,1,2,3,5]
// function fibs(n) {
//   cache[0] = 0;
//   cache[1] = 1;
//
//   for (let i = 2; i <= n + 1; i++) {
//     cache[i] = cache[i - 1] + cache[i - 2];
//   }
//
//   return cache[n];
// }


console.log(fibs(100));
