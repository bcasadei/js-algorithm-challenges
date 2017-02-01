
function translatePigLatin(str) {
  var vowels = /[aeiouAEIOU]/g;
  var letters = str.split('');
  var prefix = [];
  var result;

  if(vowels.test(letters[0])) {
    result = str + "way";
  }
  else {
    for(var i = 0; i < str.length; i++) {
      if (vowels.test(letters[i])) { break; }
      prefix.push(letters[i]);
    }

    letters = letters.slice(prefix.length);
    result = letters.concat(prefix).join('') + "ay";
  }
  return result;
}

console.log(translatePigLatin("glove"));
