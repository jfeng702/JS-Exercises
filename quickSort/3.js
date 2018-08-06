function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function quickSort(arr, left, right) {
  left = left || 0;
  right = right || arr.length - 1;

  let pivot = partition(arr, left, right);

  if (left < pivot - 1) {
    quickSort(arr, left, pivot - 1);
  }

  if (right > pivot + 1) {
    quickSort(arr, pivot + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  let pivot = right;
  let i = left;

// [1,2,3,4,5]
  for (var j = left; j < right; j++) {
    if (arr[j] <= arr[pivot]) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr,i,j);
  console.log(arr);
  return i;
}

let arr = [4,2,0,1,3];
console.log(quickSort(arr));
