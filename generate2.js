

const generateParen = n => {
  const arr = [];
  generate([], n, arr);
  console.log(arr);
};


const generate = (arr = [], n, ans = []) => {
  if (arr.length === n * 2) {
    if (valid(arr)) {
      ans.push(arr.join(''));
      // console.log(ans);
    }
  } else {
    arr.push('(');
    console.log(arr);
    generate(arr, n, ans);
    arr.pop();
    arr.push(')');
    console.log(arr);
    generate(arr, n, ans);
    arr.pop();

  }

};

const valid = (array) => {
  let balance = 0;
  for (let el of array) {
    if (el === '(') {
      balance ++;
    } else {
      balance --;
    }
    if (balance < 0) {
      return false;
    }
  }
  return balance === 0;
};

generateParen(1);
