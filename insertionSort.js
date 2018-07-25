const insertionSort = arr => {
  for(let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = temp;
  }
  return arr;
};

const array = [2,5,6,9,4,3,7,10,1,8];

console.log(insertionSort(array));
