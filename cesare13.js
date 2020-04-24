function encodChar(char) {
  const code = char.charCodeAt(0);
  if (code >= 65 && code <= 90) return String.fromCharCode(((code - 65 + 13) % 26) + 65);
  else if (code >= 97 && code <= 122) return String.fromCharCode(((code - 97 + 13) % 26) + 97);
  return String.fromCharCode(code);
}

function cesare13(input) {
  if (typeof input != 'string') {
    throw Error('Accept only string as parameter!');
  }
  let results = '';
  for (let char of input) {
    const encoded = encodChar(char);
    results += encoded;
  }
  return results;
}

module.exports = cesare13;
