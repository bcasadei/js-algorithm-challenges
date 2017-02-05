// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

var entities = {
  '&' : "&amp;",
  '<' : "&​lt;",
  '>' : "&gt;",
  '"' : "&​quot;",
  "'" : "&​apos;"
};

function convertHTML(str) {
  var new_str = [];

  str.split('').forEach(function(char) {

    if(char.match(/['"&<>]/g)) {
      new_str.push(entities[char]);
    } else {
      new_str.push(char);
    }
  });
  return new_str.join('');
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));
