function cesarCipher(str, num) {
  let lowerCaseStr = str.toLowerCase(); 
  let chars = str.toLowerCase().split('');
  let allowedChars = 'abcdefghijklmnopqrstuwxyz'.split('');
  let minIndex = 0;
  let maxIndex = allowedChars.length - 1;
  let resultChars = [];
  let charIndex;
  let newIndex;
  num = num % allowedChars.length;
  for (let i=0; i < lowerCaseStr.length; i++) {
    charIndex = allowedChars.indexOf(lowerCaseStr[i]);
    if (charIndex !== -1) {
      newIndex = charIndex + (num);
      if (newIndex < minIndex) newIndex = maxIndex + (newIndex) + 1;
      else if (newIndex > maxIndex) newIndex = (newIndex - maxIndex - 1);
      if (str[i] === str[i].toUpperCase()) {
         resultChars.push(allowedChars[newIndex].toUpperCase());
      } else resultChars.push(allowedChars[newIndex]);
    } else {
      resultChars.push(lowerCaseStr[i]);
    }
  }
  return resultChars.join('');
}

// cesarCipher('Zoo Keeper', 2)

// cesarCipher('Big Car', -18-25)

