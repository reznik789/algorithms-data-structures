function getDigit (num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(arr) {
  let most = 0;
  for (let i = 0; i < arr.length; i++) {
   most = Math.max(most, digitCount(arr[i]));
  }
  return most;
}

function radixSort(arr) {
  const mostD = mostDigits(arr);
  for (let i = 0; i <= mostD; i++) {
    let hashTable = Array.from({length: 10}, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      hashTable[digit].push(arr[j]);
    }
    arr = [].concat(...hashTable);
  }

  return arr;
}

// console.log(getDigit(7365, 22));

// console.log(digitCount(7365));

// console.log(mostDigits([3, 25, 789564, 12, 2, 4334534534535]));

console.log(radixSort([3, 45, 12, 4567, 567, 212, 6, 41]));

