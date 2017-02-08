
// Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
//
// The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.
//
// Return the rest of the array, otherwise return an empty array.

function dropElements(arr, func) {
  var index = arr.findIndex(func);
  return index >= 0 ? arr.slice(index, arr.length) : [];
}

console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
