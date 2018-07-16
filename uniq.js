// find unique values in array

function uniq(arr) {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}

console.log(uniq([1,1,2,2,3]));
