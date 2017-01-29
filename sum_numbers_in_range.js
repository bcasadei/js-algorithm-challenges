function sumAll(arr) {
  var new_arr = [];
  var max = Math.max(...arr);
  var min = Math.min(...arr);

  for(var i = min; i <= max; i++) {
    new_arr.push(i);
  }

  result = new_arr.reduce(function(acc, currVal) {
    return acc + currVal;
  });
    return result;
}

console.log(sumAll([1, 4]));
