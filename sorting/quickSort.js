// function pivot(arr, start = 0, end = arr.length - 1) {
//   let pivotInd = start;
//   let pivotVal = arr[start];
//   for (let i = start+1; i <= end; i++) {
//     if (arr[i] <= pivotVal) {
//       pivotInd++;
//       [arr[i], arr[pivotInd]] = [arr[pivotInd], arr[i]];
//     }
//   }
//   [arr[start], arr[pivotInd]] = [arr[pivotInd], arr[start]];

//   return pivotInd;
// }

// function quickSort(arr, start = 0, end = arr.length - 1) {
//   if (start < end) {
//     let pivotPoint = pivot(arr, start, end);
//     //start
//     quickSort(arr, start, pivotPoint - 1);
//     //end
//     quickSort(arr, pivotPoint + 1, end);   
//   }
//   return arr;
// }

// console.log(quickSort([4, 1, 3, 2, 5, 7, 6]));
















function pivot(arr, start = 0, end = arr.length - 1) {
  let pivVal = arr[start];
  let pivInd = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivVal) {
      [arr[i], arr[i-1]] = [arr[i-1], arr[i]];
      pivInd ++; 
    }
  }
  [arr[start], arr[pivInd]] = [arr[pivInd], arr[start]];

  return pivInd;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let pivInd = pivot(arr, start, end);
    //left side sort
    quickSort(arr, start, pivInd - 1);
    // right side sort
    quickSort(arr, pivInd + 1, end);
  }
  return arr;
}

console.log(quickSort([4, 1, 3, 2, 5, 7, 6]));