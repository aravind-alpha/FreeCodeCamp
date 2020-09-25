// Differentiate Two Arrays:

// Using concat and filter:
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((item) => !arr1.includes(item) || !arr2.includes(item));
}

// Using spread operators and declarative functions
function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter((item) => b.indexOf(item) === -1);
  }
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
