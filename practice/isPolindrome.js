function isPolindrom(string) {
  let chars = [];
  for (let char of string) {
    char = char.toLowerCase();
    if (/[a-z|а-я]/.test(char)) {
      chars.push(char);
    }
  }
  return chars.join('') === chars.reverse().join('');
}

// isPolindrom('Я иду с мечем судия');
isPolindrom('Аргентина манит негра');
