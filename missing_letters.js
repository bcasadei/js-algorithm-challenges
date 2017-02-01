
function findMissingNum(arr) {
  var expected = arr[0];
  var counter = arr[0];

  var sum = arr.reduce(function(a, b) {
    return a + b;
  }, 0);


  while(counter < arr[arr.length - 1]) {
    counter++;
    expected += counter;
  }

  return expected - sum;
}

function fearNotLetter(str) {
  arr = [];

  for(var i = 0; i < str.length; i++) {
    arr.push(str.charCodeAt(i));
  }

  if(findMissingNum(arr) === 0){
    return undefined;
  } else {
    return String.fromCharCode(findMissingNum(arr));
  }
}

console.log(fearNotLetter("bcd"));
