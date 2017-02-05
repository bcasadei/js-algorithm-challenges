// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

function sumFibs(num) {
  var num1 = 0;
  var num2 = 1;
  var fib = 0;
  var fibs = [1];

  while(num1 + num2 <= num) {
    fib = num1 + num2;
    num1 = num2;
    num2 = fib;

    if(fib < 2 || fib % 2 !== 0) {
      fibs.push(fib);
    }
  }

  return fibs.reduce(function(a, b) {
    return a + b;
  }, 0);
}

console.log(sumFibs(75025));
