function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  sorted = arr.sort(function(a, b) {
    return a - b;
  });
  idx = sorted.indexOf(num);

  return idx;
}

getIndexToIns([3, 10, 5], 3);
