//  Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

const squareList = (arr) => {
  // Only change code below this line
  return arr
    .filter((num) => Number.isInteger(num) && num > 0 == true) // Check for Non-floating and Positive numbers
    .map((num) => num * num);
  // Only change code above this line
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);
