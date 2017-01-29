function createKey() {
  key = createAlphabet();
  key.push(key.splice(0, 13));
  var merged = [].concat.apply([], key);
  console.log(merged);
  return merged;
}

function createAlphabet() {
  array = [];
  for (i = 65; i <= 90; i++) {
    array[array.length] = String.fromCharCode(i);
  }
  return array;
}

function rot13(str) {
  var alpha = createAlphabet();
  var key = createKey();

  new_string = str.split('').map(function(char) {
    if (alpha.includes(char)) {
      return key[alpha.indexOf(char)];
    } else {
      return char;
    }
  });

  return new_string.join('');
}

console.log(rot13("SERR PBQR PNZC")); // FREE CODE CAMP
