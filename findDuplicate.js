var findDuplicate = function(nums) {
  let hash = {};
  for (let el of nums) {
    if (hash[el]) {
      return el;
    }
    hash[el] = true;
  }
};

// var findDuplicate = function(nums) {
//   let tortoise = nums[0];
//   let hare = nums[0];
//   while (true) {
//     tortoise = nums[tortoise];
//     hare = nums[nums[hare]];
//     if (hare === tortoise) {
//       break;
//     }
//   }
//
//   let ptr1 = tortoise;
//   let ptr2 = nums[0];
//   while (ptr1 !== ptr2) {
//     ptr1 = nums[ptr1];
//     ptr2 = nums[ptr2];
//   }
//
//   return ptr1;
// };

let arr = [2,5,9,6,9,3,8,9,7,1];

console.log(findDuplicate(arr));
