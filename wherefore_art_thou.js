
function whatIsInAName(collection, source) {
  var arr = [];
  var srcKey = Object.keys(source);
  var srcLength = Object.getOwnPropertyNames(source).length;

  collection.forEach(function(obj) {
    var counter = 0;

    for(var name in obj) {
      for(var key in source){
        if(name === key && obj[name] === source[key]) {
          counter++;
        }
      }
    }

    if(counter === srcLength) {
      arr.push(obj);
      counter = 0;
    }

  });
  return arr;
}

console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));

// [{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }],
// { "a": 1, "b": 2 })
