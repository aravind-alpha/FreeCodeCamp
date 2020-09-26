// Sum of all odd fibonacci numbers :

function sumFibs(num) {
  let previousNumber = 0;
  let currentNumber = 1;
  let result = 0;

  while (currentNumber <= num) {
    if (currentNumber % 2 !== 0) {
      result += currentNumber;
    }

    currentNumber += previousNumber;
    previousNumber = currentNumber - previousNumber;
  }
  return result;
}

sumFibs(4);
