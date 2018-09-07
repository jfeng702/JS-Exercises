function fibs(n, cache = {}) {

  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  if (cache[n]) {
    return cache[n];
  }
  cache[n] = fibs(n-1, cache) + fibs(n-2, cache);
  return cache[n];
}

console.log(fibs(100));
