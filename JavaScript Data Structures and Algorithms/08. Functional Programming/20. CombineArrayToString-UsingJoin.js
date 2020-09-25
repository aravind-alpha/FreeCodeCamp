// Combining Array to string using "join":

function sentensify(str) {
  return str.split(/\W/).join(" "); // "/\W/" => matches non-word characters.
}
sentensify("May-the-force-be-with-you");
