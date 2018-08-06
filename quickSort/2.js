function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function quickSort(arr, left, right) {
  left = left || 0;
  right = right || arr.length - 1;


  if (left < right) {
    let pivot = partition(arr, left, right);
    if (left < pivot - 1) {
      quickSort(arr, left, pivot - 1);
    }

    if (right > pivot) {
      quickSort(arr, pivot, right);
    }
  }

  return arr;
}

function partition(arr, left, right) {
  let pivot = right;
  let i = left;

  for (var j = left; j < right; j++) {
    if (arr[j] < arr[pivot]) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr,i,j);
  return i;
}

let ar = [5,4,1,2,3];
console.log(quickSort(ar));
