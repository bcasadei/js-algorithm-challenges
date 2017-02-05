// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function lowerCaseHyphens(match, string, offset) {
  return (offset ? '-' : '') + match.toLowerCase();
}

function spinalCase(str) {
  var lowercase = str.replace(/([A-Z]|\s[a-z])/g, lowerCaseHyphens);
  return lowercase.replace(/[_\s]/g, '');
}

console.log(spinalCase("Teletubbies say Eh-oh"));
