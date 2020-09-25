// Seek and Destroy

// Using Arrow Functon :
const destroyer = (arr, ...valuesToDestroy) =>
  arr.filter((element) => !valuesToDestroy.includes(element));

// Using "arguments" :
function destroyer(arr, val) {
  let args = Array.from(arguments).slice(1);
  return arr.filter(function (val) {
    return !args.includes(val);
  });
}
