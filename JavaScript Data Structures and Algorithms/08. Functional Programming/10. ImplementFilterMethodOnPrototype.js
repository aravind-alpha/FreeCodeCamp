// Implement "filter" method on Prototype

var s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
  var newArray = [];
  this.forEach(function (a) {
    if (callback(a) == true) {
      newArray.push(a);
    }
  });
  return newArray;
};

var new_s = s.myFilter(function (item) {
  return item % 2 === 1;
});

console.log(new_s);
