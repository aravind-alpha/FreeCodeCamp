// Using For loop :
function findLongestWordLength(str) {
  var words = str.split(" ");
  var maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Using Math and Map :
function findLongestWordLength1(str) {
  return Math.max(...str.split(" ").map((word) => word.length));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Using Reduce :
function findLongestWordLength(str) {
  return str.split(" ").reduce(function (x, y) {
    return Math.max(x, y.length);
  }, 0);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
