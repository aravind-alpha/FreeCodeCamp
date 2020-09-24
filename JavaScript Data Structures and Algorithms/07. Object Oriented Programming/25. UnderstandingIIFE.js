// Understanding Immediately Invoked Function Expressions (IIFE)

// Normal Function
function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();

// IIFE
(function () {
  console.log("A cozy nest is ready");
})();
