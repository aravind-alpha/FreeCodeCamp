// Avoid Mutations and Side effects using Functional Programming

/* 
* Recall that in functional programming, changing or altering things is called "mutation", and the 
  outcome is called a "side effect". A function, ideally, should be a pure function, meaning that it 
  does not cause any side effects.

* Let's try to master this discipline and not alter any variable or object in our code. */

// The global variable
var fixedValue = 4;

function incrementer() {
  return fixedValue + 1; // NOTE: "fixefValue++" will change the global variable value too..
}
