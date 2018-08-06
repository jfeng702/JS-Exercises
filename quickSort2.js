function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function quickSort(arr, left, right) {
  left = left || 0;
  right = right || arr.length - 1;

  let pivot = partitionLomuto(arr, left, right);

  if (left < pivot - 1) {
    console.log(left, 'left');
    quickSort(arr, left, pivot - 1);
  }

  if (right > pivot) {
    console.log(right, 'right');
    quickSort(arr, pivot, right);
  }

  return arr;
}

// [1,4,3,2,5]

function partitionLomuto(arr, left, right) {
  let pivot = right;
  let i = left;

  for (var j = left; j < right; j++) {
    if (arr[j] <= arr[pivot]) {
      console.log('swap', i, j);
      swap(arr, i, j);
      i++;
    }
  }

// this swap puts pivot between left and right
  swap(arr,i,j);
  console.log(arr);
  console.log(i);
  return i;
}

console.log(quickSort([5,4,3,2,1]));
