// [4,5,1,2], target = 1 , output = 2
const shiftedArrSearch = (arr, target) => {
  let pivotIdx = findPivot(arr);
  if (pivotIdx === 0 || target < arr[0]) {
    return binarySearch(arr, pivotIdx, arr.length - 1, target);
  } else {
    return binarySearch(arr, 0, pivotIdx - 1, target);
  }
};

const findPivot = arr => {
  let begin = 0;
  let end = arr.length - 1;

  while (begin <= end) {
    let mid = Math.round((begin + end) / 2);
    // console.log(mid, 'mid');
    if (arr[mid] < arr[mid-1]) {
      return mid;
    }
    if (arr[mid] > arr[0]) {
      begin = mid + 1;
    } else {
      end = mid - 1;
    }
    // console.log(mid);
  }
  return 0;
};

const binarySearch = (arr, begin, end, target) => {
  while (begin <= end) {
    let mid = begin + Math.floor((end - begin) / 2);
    // console.log(mid);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      begin = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

// console.log(findPivot([3,4,5,1,2]));
// console.log(findPivot([9,1,2,3,4]));
// console.log(findPivot([4,5,1,2,3]));
// console.log(findPivot([4,5,6,1]));
// console.log(findPivot([4,5,6,7]));
// console.log(shiftedArrSearch([1,2], 2));
console.log(shiftedArrSearch([4,5,6,1,2], 1));
