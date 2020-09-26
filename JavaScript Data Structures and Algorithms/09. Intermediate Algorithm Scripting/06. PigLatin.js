// Pig Latin

/*
* If a word begins with a consonant, take the first consonant or consonant cluster, move it to the 
  end of the word, and add "ay" to it.
* If a word begins with a vowel, just add "way" at the end. */

// Solution 1

function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str.replace(consonantRegex, "").concat(myConsonants).concat("ay")
    : str.concat("way");
}

// Solution 2
function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

translatePigLatin("consonant");
