
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
  for(var i = 0; i < position; i++) {
    result.push(lookup[place]);
  }
}

function convertToRoman(num) {
  var result = [];
  while(num > 0) {
    if(num >= 1000) {
      lookupNum(num, 1000);
      num = num % 1000;
    }
    else if(num >= 900) {
      lookupNum(num, 900);
      num = num % 900;
    }
    else if(num >= 500) {
      lookupNum(num, 500);
      num = num % 500;
    }
    else if (num >= 400) {
      lookupNum(num, 400);
      num = num % 400;
    }
    else if(num >= 100) {
      lookupNum(num, 100);
      num = num % 100;
    }
    else if(num >= 90) {
      lookupNum(num, 90);
      num = num % 90;
    }
    else if(num >= 50) {
      lookupNum(num, 50);
      num = num % 50;
    }
    else if (num >= 40) {
      lookupNum(num, 40);
      num = num % 40;
    }
    else if(num >= 10) {
      lookupNum(num, 10);
      num = num % 10;
    }
    else if(num >= 9) {
      lookupNum(num, 9);
      num = num % 9;
    }
    else if(num >= 5) {
      lookupNum(num, 5);
      num = num % 5;
    }
    else if(num >= 4) {
      lookupNum(num, 4);
      num = num % 4;
    }
    else if(num >= 1) {
      lookupNum(num, 1);
      num = num % 1;
    }
    else {
      break;
    }
  }
  return result.join('');
}
console.log(convertToRoman(649));
