// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

function truthCheck(collection, pre) {
  function isTruthy(elm, idx, arr) {
    var x = Boolean(elm[pre]);
    if(x) {
      return elm.hasOwnProperty(pre)
    }
  }
  return collection.every(isTruthy);
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"));
