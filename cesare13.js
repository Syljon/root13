function encodChar(char) {
  const bigLettersStartIndex = 65;
  const bigLettersEndIndex = 90;
  const smallLettersStartIndex = 97;
  const smallLettersEndIndex = 122;
  const alphabetSize = 26;
  const shift = 13;

  const code = char.charCodeAt(0);

  if (code >= bigLettersStartIndex && code <= bigLettersEndIndex)
    return String.fromCharCode(((code - bigLettersStartIndex + shift) % alphabetSize) + bigLettersStartIndex);
  else if (code >= smallLettersStartIndex && code <= smallLettersEndIndex)
    return String.fromCharCode(((code - smallLettersStartIndex + shift) % alphabetSize) + smallLettersStartIndex);
  return String.fromCharCode(code);
}

function cesare13(input) {
  if (typeof input != 'string') {
    throw Error('Accept only string as parameter!');
  }
  return input
    .split('')
    .map((char) => encodChar(char))
    .join('');
}

module.exports = cesare13;
