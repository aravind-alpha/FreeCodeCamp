// Using Map and Spread Operators (ES6) :
function largestOfFour(arr) {
  return arr.map((a) => Math.max(...a));
}

// Using Bind method :
function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}

// Using Vanilla JS :
function largestOfFour(arr) {
  return arr.map(function (a) {
    return Math.max.apply(null, a);
  });
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
