function inBetween50a99(value1, value2, value3) {
  if((value1 > 50 && value2 < 99) || (value2 > 50 && value2 < 99) || (value3 > 50 && value3 < 99)) {
      return true;
  } else {
    return false;
  }
}
console.log(inBetween50a99(20, 60));
console.log(inBetween50a99(75, 10));
console.log(inBetween50a99(65, 72));
console.log(inBetween50a99(20, 30));