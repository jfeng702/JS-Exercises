var topKFrequent = function(nums, k) {
  let obj = {};
  for (let el of nums) {
    obj[el] = (obj[el] || 0) + 1;
  }
  let keys = Object.keys(obj);
  let sorted = keys.sort ((a,b) => {
    return obj[b] - obj[a];
  });
  return sorted.map (el => Number(el)).slice(0,k);
};

let num = [1,1,1,2,2,3];
let k = 2;
console.log(topKFrequent(num, k));
