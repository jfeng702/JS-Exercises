function sortKMessedArray(arr, k) {
  // your code goes here
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = temp;
  }
  return arr;
}

let array = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9];
console.log(sortKMessedArray(array, 2));
