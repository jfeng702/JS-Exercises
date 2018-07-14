// find number of distinct pairs that add up to k

function numberOfPairs(a, k) {
  const hash = {};
  let resultHash = {};
  for (let el of a) {
    if (hash[k - el]) {
      if (el < (k - el)) {
        resultHash[[el, k - el]] = true;
      } else {
        resultHash[[k - el, el]] = true;
      }
    }
    hash[el] = 1;
  }
  return Object.values(resultHash).length;
}

console.log(numberOfPairs([1,2,3,6,7,8,9,1], 10));
