function accum(s) {
	// your code
  s = s.split('');
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    let current = s[i][0];
    let currentEl;
    currentEl += current.toUpperCase();
    let index = i;
    while (index > 0) {
      currentEl += current.toLowerCase();
      index--;
    }
    arr.push(currentEl);
  }
  return arr.join('-');
}

function test(s) {
  return s.reduce((acc, el) => {
    return acc + el;
  });
}

console.log(accum('asdfs'));

// console.log(test([1,2,3,4]));
