// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
//
// The range will be an array of two numbers that will not necessarily be in numerical order.

function smallestCommons(arr) {
  arr.sort();
  var start = arr[0];
  var stop = arr[arr.length - 1]
  var mult = arr[0]
  var range = [];

  for(var i = start; i <= stop; i++) {
    range.push(i);
  }

  function greatestCommDiv(a, b) {
    if(b === 0) {
      return a;
    } else {
      return greatestCommDiv(b, a % b);
    }
  }

  function leastCommMult(a, b) {
    return (a * b) / greatestCommDiv(a, b);
  }

  for(var j = 0; j < range.length; j++) {
    mult = leastCommMult(mult, range[j]);
  }

  return mult;
}

console.log(smallestCommons([1,5]));
