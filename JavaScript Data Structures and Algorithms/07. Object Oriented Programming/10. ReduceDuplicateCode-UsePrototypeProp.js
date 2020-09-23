function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 2; // This will create "numLegs" for all the Objects inside "Dog".

// Only change code above this line
let beagle = new Dog("Snoopy");
