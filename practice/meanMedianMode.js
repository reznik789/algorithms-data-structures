function getMean(arr) {
  var arrSum = 0;
  arr.forEach( number => {
    arrSum += number;
  } )
  return arrSum / arr.length;
}

function getMedian(arr) {
  const sortedArr = arr.sort((a, b) => a-b);
  const firstMiddleIndex = Math.floor((sortedArr.length - 1)/2);
  const secondMiddleIndex = Math.ceil((sortedArr.length - 1)/2); 
  return (sortedArr[firstMiddleIndex] + sortedArr[secondMiddleIndex]) / 2; 
}

function getMode(arr) {
  var numsCounts = {};
  for (var num of arr) {
    numsCounts[num] = ++numsCounts[num] || 1;
  }
  var biggestCount = 0;
  var modes = [];
  for (var num in numsCounts) {
    if (numsCounts.hasOwnProperty(num)) {
      if (numsCounts[num] > biggestCount) {
        biggestCount = numsCounts[num];
        modes = [num];
      } else if(numsCounts[num] === biggestCount) {
        modes.push(num)
      }
    }
    
  }
  return (modes.length === Object.keys(numsCounts).length) ? [] : modes;
}

function meanMedianMode(arr) {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    modes: getMode(arr)
  };
}

// meanMedianMode([1, 14, 46, 1289, 526, 14, 2, 3, 756, 14]);
// meanMedianMode([5, 8, 10, 8, 7, 9, 3, 11, 10, 10, 12, 15]);
meanMedianMode([9, 10, 23, 10, 23, 9]);