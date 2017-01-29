
function diffArray(arr1, arr2) {
  var newArr = [];

  arr1.forEach(function(elem) {
    if(arr2.indexOf(elem) === -1) {
      newArr.push(elem);
    }
  });

  arr2.forEach(function(elem) {
    if(arr1.indexOf(elem) === -1) {
      newArr.push(elem);
    }
  });

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
