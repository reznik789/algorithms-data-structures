function merge(arr1, arr2) {
  let result = [];
  let ind1 = 0;
  let ind2 = 0;
  while (ind1 < arr1.length && ind2 < arr2.length) {
    if (arr1[ind1] <= arr2[ind2]) {
      result.push(arr1[ind1]);
      ind1++;
    } else {
      result.push(arr2[ind2]);
      ind2++;
    }
  }
  while (ind1 < arr1.length) {
    result.push(arr1[ind1]);
    ind1++;
  }
  while (ind2 < arr2.length) {
    result.push(arr2[ind2]);
    ind2++;
  }

  return result;
}

function mergeSort (arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid)); 

  return merge(left, right)
}

// console.log(merge([1, 4, 6], [3, 4, 18]));
console.log(mergeSort([14, 567, 23, 2, 47, -345, 33, 12, 85, -7589, 2, 7]));