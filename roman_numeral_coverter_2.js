
var lookup = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M"
};

function lookupNum(current_num, place) {
  var position = Math.floor(current_num / place);
  var results = [];
  for(var i = 0; i < position; i++) {
    results.push(lookup[place]);
  }
  return results;
}

function convertToRoman(num) {
  var result = [];

  while(num > 0) {
    if(num >= 1000) {
      result.push(lookupNum(num, 1000));
      num = num % 1000;
    }
    else if(num >= 900) {
      result.push(lookupNum(num, 900));
      num = num % 900;
    }
    else if(num >= 500) {
      result.push(lookupNum(num, 500));
      num = num % 500;
    }
    else if (num >= 400) {
      result.push(lookupNum(num, 400));
      num = num % 400;
    }
    else if(num >= 100) {
      result.push(lookupNum(num, 100));
      num = num % 100;
    }
    else if(num >= 90) {
      result.push(lookupNum(num, 90));
      num = num % 90;
    }
    else if(num >= 50) {
      result.push(lookupNum(num, 50));
      num = num % 50;
    }
    else if (num >= 40) {
      result.push(lookupNum(num, 40));
      num = num % 40;
    }
    else if(num >= 10) {
      result.push(lookupNum(num, 10));
      num = num % 10;
    }
    else if(num >= 9) {
      result.push(lookupNum(num, 9));
      num = num % 9;
    }
    else if(num >= 5) {
      result.push(lookupNum(num, 5));
      num = num % 5;
    }
    else if(num >= 4) {
      result.push(lookupNum(num, 4));
      num = num % 4;
    }
    else if(num >= 1) {
      result.push(lookupNum(num, 1));
      num = num % 1;
    }
    else {
      break;
    }
  }
  result = result.reduce(function(a, b) {
    return a.concat(b);
  }, []);
  return result.join('');
}
console.log(convertToRoman(12));
