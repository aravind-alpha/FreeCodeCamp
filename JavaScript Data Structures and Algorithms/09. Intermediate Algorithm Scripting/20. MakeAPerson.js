// Make a Person

/*
 * Fill in the object constructor with the following methods below:
 * getFirstName()
 * getLastName()
 * getFullName()
 * setFirstName(first)
 * setLastName(last)
 * setFullName(firstAndLast) */

var Person = function (firstAndLast) {
  let fullName = firstAndLast;

  // get first name
  this.getFirstName = function () {
    return fullName.split(" ")[0];
  };
  // get last name
  this.getLastName = function () {
    return fullName.split(" ")[1];
  };
  // get full name
  this.getFullName = function () {
    return fullName;
  };
  // set first name
  this.setFirstName = function (name) {
    fullName = name + " " + fullName.split(" ")[1];
  };
  // set last name
  this.setLastName = function (name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };
  // set full name
  this.setFullName = function (name) {
    fullName = name;
  };
};

var bob = new Person("Bob Ross");
console.log(bob.getFullName("Haskell Ross"));
