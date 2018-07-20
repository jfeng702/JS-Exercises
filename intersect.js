var intersect = function(nums1, nums2) {
  let obj = {};
  let result = [];
  for (let el of nums1) {
    obj[el] = (obj[el] || 0) + 1;
  }

  for (let el of nums2) {
    if (obj[el]) {
      if (obj[el] > 0) {
        obj[el]--;
        result.push(el);
      }
    }
  }

  return result;
};

console.log(intersect([-2147483648,1,2,3], [1,-2147483648,-2147483648]));
