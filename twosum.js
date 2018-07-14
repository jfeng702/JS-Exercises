// O(n)

var twoSum = function(nums, target) {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (typeof hash[target - nums[i]] !== 'undefined') {
          return [hash[target - nums[i]], i];
        }
        hash[nums[i]] = i;
    }

};

console.log(twoSum([2,7,11,15], 9));
