// Using While Loop :
function repeatStringNumTimes(str, num) {
  let repeatedString = "";
  while (num > 0) {
    repeatedString += str;
    num--;
  }
  return repeatedString;
}

// Using Recursion :
function repeatStringNumTimes(str, num) {
  return num < 1
    ? ""
    : num === 1
    ? str
    : str + repeatStringNumTimes(str, num - 1);
}

repeatStringNumTimes("abc", 3);

// Using ES6 repeat()
function repeatStringNumTimes(str, num) {
  return num < 1 ? "" : num === 1 ? str : str.repeat(num);
}
