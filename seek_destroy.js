
function notIncluded(value) {
  var x = this.includes(value) === false;
  if (x) {
    return x;
  }
}

function destroyer(arr, ...arguments) {
  var args = [...arguments];
  new_arr = arr.filter(notIncluded, args);

  return new_arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
