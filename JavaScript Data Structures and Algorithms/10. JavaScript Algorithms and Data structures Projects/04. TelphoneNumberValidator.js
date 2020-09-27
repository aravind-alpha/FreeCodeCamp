// Validating Phone Number :

function telephoneCheck(str) {
  let regex = /^(1?\s?)?(\(\d{3}\)|\d{3})[\s\-]?(\d{3})[\s\-]?(\d{4})$/gm;
  return regex.test(str);
}

console.log(telephoneCheck("1 456 789 4444")); // true;
console.log(telephoneCheck("555-555-5555")); // true;
console.log(telephoneCheck("5a5b5-5c5d5-55e55")); // false
console.log(telephoneCheck("555-5555")); // false
