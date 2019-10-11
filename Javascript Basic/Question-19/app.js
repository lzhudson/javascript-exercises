function checkIntervalNumber(num) {
  if(num >=20 && num <= 100) {
    return true;
  } else if(num >= 20 && num <= 400) {
    return false;
  }
}
console.log(checkIntervalNumber(10));
console.log(checkIntervalNumber(40));
console.log(checkIntervalNumber(350));