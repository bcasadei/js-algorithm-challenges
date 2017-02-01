
function myReplace(str, before, after) {
  var caps = /[A-Z]/g;
  var new_word = after;

  if(caps.test(before)) {
    var letters = after.split('');
    letters[0] = letters[0].toUpperCase();
    new_word = letters.join('');
  } else {
    new_word = after;
  }

  var new_str = str.replace(before, new_word);
  return new_str;
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
