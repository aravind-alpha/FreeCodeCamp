// Using Closure to protect properties within an Object from being modified externally.

/*
 * = NOTE : =
 * In JavaScript, a function always has access to the context in which it was created. This is called closure. */

function Bird() {
  let weight = 15;

  this.getWeight = function () {
    return weight;
  };
}
