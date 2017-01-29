
function convertToRoman(num) {
  //  lookup table
  var lookup = {
    1 : "I",
    5 : "V",
    10 : "X",
    50 : "L",
    100 : "C",
    500 : "D",
    1000 : "M"
  }
  var romanNum = [];

  // break down num into 1000s 100s 10s 5s 1s
  var arr = num.toString().split('').reverse(); // reverse array to iterate right to left
  for(var i = 0; i < arr.length; i++){
    if(i === 0 && arr[i] > 5){
      var rom = arr[i] / 5;
      console.log(rom);
    }
  }
  console.log(arr);
}
convertToRoman(36);
