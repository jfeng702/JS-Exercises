const gen = (n, arr = []) => {
  backtrack(n, '', arr);
  console.log(arr);
};

const backtrack = (n, s, array, left = 0, right = 0) => {
  if (s.length === n * 2) {
    array.push(s);
    return;
  } else {
    if (left < n) {
      backtrack(n, s + '(', array, left + 1, right);
    }
    if (right < left) {
      backtrack(n, s + ')', array, left, right + 1);
    }
  }
};

gen(3);
