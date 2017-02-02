 // Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

function uniq(arr) {
  var obj = {};
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if(!obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] = true;
      result.push(arr[i]);
    }
  }
  return result;
}

function uniteUnique() {
  var array = Array.from(arguments);

  new_arr = array.reduce(function(a, b) {
    return a.concat(b);
  }, []);

  return uniq(new_arr);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// => [1, 3, 2, 5, 4]
