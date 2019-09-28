var num = 27;
function multiplyThreeOrSeven(num) {
  if(num % 3 === 0 || num % 7 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(multiplyThreeOrSeven(num));
console.log(multiplyThreeOrSeven(95));