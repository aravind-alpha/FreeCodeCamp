// Check every element in an array meets certain criteria - Using "every" method.

function checkPositive(arr) {
  return arr.every((value) => value > 0);
}
checkPositive([1, 2, 3, -4, 5]);
