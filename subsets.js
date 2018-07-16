var subsets = function(nums) {
  if (nums.length === 0 || nums === null) return [];
  let returnArr = [];
  returnArr.push([]);
  nums.forEach(z => {
      let len = returnArr.length;
      let i = 0;
      while(i < len) {
          let temp = returnArr[i].slice(0);
          temp.push(z);
          console.log(temp);
          returnArr.push(temp);
          i++;
      }
  });

  return returnArr;
};

console.log(subsets([1,2,3]));
