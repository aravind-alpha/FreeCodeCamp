function countOnline(usersObj) {
  // Only change code below this line
  let trueCount = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      trueCount++;
    }
  }
  return trueCount;
  // Only change code above this line
}
