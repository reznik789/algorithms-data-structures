function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1; 
  let middle = Math.floor((end + start) / 2); 
  while (arr[middle] !== val && start < end) {
    if (val < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((end + start) / 2);
  }
  return arr[middle] === val ? middle : -1;
}

console.log(binarySearch([2, 14, 37, 98, 124], 2));
