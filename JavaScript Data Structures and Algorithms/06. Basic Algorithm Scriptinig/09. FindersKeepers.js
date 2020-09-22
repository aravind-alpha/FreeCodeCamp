// Using for loop :
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);

// Using find :
function findElement(arr, func) {
  return arr.find(func);
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);

// Using Map :
function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}
