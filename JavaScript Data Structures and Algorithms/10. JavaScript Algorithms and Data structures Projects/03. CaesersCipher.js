// Caesars Cipher

/* 
* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
  In a shift cipher the meanings of the letters are shifted by some set amount.

* A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
  Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

* Write a function which takes a ROT13 encoded string as input and returns a decoded string.

* All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), 
  but do pass them on. */

function rot13(str) {
  return str.replace(/[A-Z]/g, (letter) =>
    String.fromCharCode((letter.charCodeAt(0) % 26) + 65)
  );
}
/* 
* = NOTE = 
* Mapping a range of 26 numbers i.e. between [65 - 90] which represents uppercase [English alphabets] 
  in Unicode character set 74 to a range of numbers between [0 - 25]. */

console.log(rot13("SERR PBQR PNZC")); // FREE CODE CAMP
console.log(rot13("NENIAQ")); // ARAVIND
