// Using Slice Method :
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

// Using endsWith() :
function confirmEnding(str, target) {
  return str.endsWith(target);
}

// Using offset : (looking backwards from a string)
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}
