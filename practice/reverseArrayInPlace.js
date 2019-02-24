function reverseArrayInPlase(array) {
  var i = 0;
  var length = array.length;
  var lastIndex = length - 1;
  var currentVal;
  for (i; i < (length - i); i++) {
    currentVal = array[i];
    array[i] = array[lastIndex - i];
    array[lastIndex - i] = currentVal;
  }
  return array;
}

// reverseArrayInPlase([1, 2, 3, 4, 5, 6, 7]);

