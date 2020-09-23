// Using Map and charAt() :
function titleCase(str) {
  let lowerStr = str.toLowerCase().split(" ");
  let replacedChar = lowerStr.map(function (char) {
    return char.replace(char.charAt(0), char.charAt(0).toUpperCase());
  });
  return replacedChar.join(" ");
}

// Using Regex :
function titleCase(str) {
  return str
    .toLowerCase()
    .replace(/(^|\s)\S/g, (letter) => letter.toUpperCase());
}

titleCase("I'm a little tea pot");

console.log(titleCase("I'm Aravind and I love coding"));
