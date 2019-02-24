//Bubble sort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    //
    let noSwap = true;
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j] <= arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        noSwap = false;
      }
    }
    if (noSwap) {
      break;
    }
  }

  return arr;
}

console.log(bubbleSort([3, 6, 4, 2, 17, 12, 22, 5]));
