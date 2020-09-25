// Introduction to Currying and Partial Applications

/* 
* = Currying =
    * The arity of a function is the number of arguments it requires. Currying a function means to 
    convert a function of N arity into N functions of arity 1.
    * In other words, it restructures a function so it takes one argument, then returns another function 
    that takes the next argument, and so on.
 
* = Partial Application =
    * Similarly, partial application can be described as applying a few arguments to a function at a 
      time and returning another function that is applied to more arguments. */

// Partial Application example:
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13

// = Solution =
function add(x) {
  // Only change code below this line
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
  // Only change code above this line
}
add(10)(20)(30);
