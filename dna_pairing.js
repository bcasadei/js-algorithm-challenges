var pairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C"
};

function pairElement(str) {
  var arr = str.split('');
  var result = [];

  arr.forEach(function(char) {
    result.push([char, pairs[char]]);
  });

  return result;
}

console.log(pairElement("GCG"));
