/**
 * @param {number[]} nums
 * @return {number}
 */


var missingNumber = function(nums) {
  nums = nums.sort((a,b) => a-b);
  if (nums[0] !== 0) {
    return 0;
  } else if (nums[nums.length - 1] !== nums.length) {
    return nums.length;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
};
// var missingNumber = function(nums) {
//   const obj = {};
//   const set = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     set.add(nums[i]);
//   }
//
//   for (let i = 0; i <= nums.length; i++) {
//     if (!set.has(i)) {
//       return i;
//     }
//   }
//
// };

// const arr = [0,1,2,3,5,6];
const arr = [0];
console.log(missingNumber(arr));
