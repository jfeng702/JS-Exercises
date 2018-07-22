

const flatten = array => {
  var result = [];
  for (let el of array) {
    if (el instanceof Array) {
      result = result.concat(flatten(el));
    } else {
      result.push(el);
    }
  }
  return result;
};

const dict1 = [1,2,[3,4]];
console.log(flatten(dict1));
