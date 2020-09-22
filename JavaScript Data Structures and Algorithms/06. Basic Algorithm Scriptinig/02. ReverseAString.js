function reverseString(str) {
  for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

reverseString("hello");

// = OR =
function reverseString2(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString2("hello"));
