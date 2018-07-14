const generateParen = n => {
  const arr = [];
  generate([], n, arr);
  console.log(arr);
};

const generate = (array = [], n, ans = []) => {
  if (array.length === 2 * n) {
    if (valid(array)) {
      ans.push(array.join(''));
    }
  } else {
    array.push('(');
    generate(array, n, ans);
    array.pop();
    array.push(')');
    generate(array, n, ans);
    array.pop();
  }
};

const valid = array => {
  let bal = 0;
  for (let el of array) {
    if (el === '(') {
      bal ++;
    } else {
      bal --;
    }
    if (bal < 0) {
      return false;
    }
  }

  return bal === 0;
};

generateParen(1);
