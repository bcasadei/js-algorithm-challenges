
function sumPrimes(max) {
  var primes = [];

  for (var counter = 2; counter <= max; counter++) {
    var notPrime = false;

    for (var i = 2; i <= counter; i++) {
      if (counter % i === 0 && i !== counter) {
        notPrime = true;
      }
    }
    if (notPrime === false) {
      primes.push(counter);
    }
  }

  return primes.reduce(function(a, b) {
    return a + b;
  }, 0);
}

console.log(sumPrimes(977));
