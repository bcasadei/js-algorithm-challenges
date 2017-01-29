
function notFalsey(value) {
  var x = Boolean(value);
  if (x) {
    return x;
  }
}

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  new_array = arr.filter(notFalsey);
  return new_array;
}

console.log(bouncer([false, null, 0, NaN, undefined, ""]));
