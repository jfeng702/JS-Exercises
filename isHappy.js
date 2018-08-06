var isHappy = function(n) {
  let obj = {};
  while (true) {
    let sum = 0;
    let nums = n.toString().split('').map(el => Number(el) ** 2).forEach(el => sum += el);
    if (obj[sum]) {
      return false;
    }
    if (sum === 1) {
      return true;
    }
    obj[sum] = true;
    n = sum;
  }

};

console.log(isHappy(19));
