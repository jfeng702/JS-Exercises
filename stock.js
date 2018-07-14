const stock = (arr) => {
  let max = 0;
  let start;

  for (let i = 0; i < arr.length; i++) {
    if (start == null) {
      if (arr[i+1] > arr[i]) {
        start = i;
      }
    } else {
      if (arr[i+1] < arr[i] || (i === arr.length - 1 && arr[i] > arr[start])) {

        max += (arr[i] - arr[start]);
        start = null;

      }
    }
  }
  return max;
};

const arr1 = [1,2,3,4,5];
const arr2 = [1,4,2,5,3,6];
// 3 + 3 + 3
const arr3 = [1,4,6,2];
const arr4 = [1,4,2,6];
const arr5 = [5,1,2,4,6];

console.log(stock(arr2));
