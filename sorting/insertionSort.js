function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i-1
    for (j; j >= 0 && arr[j] > currentVal; j--) {
       arr[j+1] = arr[j];
    }
    arr[j+1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([34, 12, 5, 6, 87, 33]));