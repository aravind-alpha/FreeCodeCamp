// Split a string into array.

// * Note that the words are not always separated by spaces, and the array should not contain punctuation.

function splitify(str) {
  return str.split(/\W/); // "/\W/" => matches any non-word character.
}
splitify("Hello World,I-am code");
