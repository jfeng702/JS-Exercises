// naive implementation
// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   let pivot = arr[0];
//   let left = arr.slice(1).filter(el => el < pivot);
//   let right = arr.slice(1).filter(el => el >= pivot);
//   left = quickSort(left);
//   right = quickSort(right);
//   return left.concat([pivot]).concat(right);
//
// }

// quicksort in place


// swap function helper
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function quicksort(array, left, right) {
  left = left || 0;
  right = right || array.length - 1;

  var pivot = partitionLomuto(array, left, right); // you can play with both partition
  // var pivot = partitionHoare(array, left, right); // you can play with both partition

  if(left < pivot - 1) {
    quicksort(array, left, pivot - 1);
  }
  if(right > pivot) {
    quicksort(array, pivot, right);
  }
  return array;
}
// Lomuto partition scheme, it is less efficient than the Hoare partition scheme
function partitionLomuto(array, left, right) {
  var pivot = right;
  var i = left;

  for(var j = left; j < right; j++) {
    if(array[j] <= array[pivot]) {
      swap(array, i , j);
      i = i + 1;
    }
  }
  swap(array, i, j);
  return i;
}

let ar = [5,4,1,2,3];
console.log(quicksort(ar));



// console.log(findKthLargest([5,4,3,2,1], 2));
