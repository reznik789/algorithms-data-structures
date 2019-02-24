function revereseWords(string) {
  let words = string.split(' ');
  let reversedWords = [];
  words.forEach(word => {
    reversedWords.push(word.split('').reverse().join(''));
  });
  return reversedWords.reverse().join(' ');
}

// revereseWords('i dont wanna talk just wanna fuck you baby');