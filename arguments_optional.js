// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// If either argument isn't a valid number, return undefined.

// It has to add two numbers passed as parameters and return the sum.
// It has to check if any of the numbers are actual numbers, otherwise return undefined and stop the program right there.
// It has to check if it has one or two arguments passed. More are ignored.
// If it has only one argument then it has to return a function that uses that number and expects another one, to then add it.
function isNumber(num) {
  return typeof num === "number" ? num : undefined;
}

function addTogether() {
  var arr = Array.from(arguments);

  if(arr.length === 1 && isNumber(arr[0])) {
    var num1 = arr[0];
    return function (num2) {
      return addTogether(num1, num2);
    };
  }
  else if(isNumber(arr[0]) === undefined || isNumber(arr[1]) === undefined) {
    return undefined;
  }
  else if(arr.length > 1 && isNumber(arr[0]) && isNumber(arr[1])) {
    return arguments[0] + arguments[1];
  }

}

console.log(addTogether(2)(3));
