function checkEqualorDifferenceorSome(num1 ,num2) {
  return num1 === 15 || num2 === 15 || (num1 + num2) === 15 || Math.abs(num1 - num2) === 15
}
console.log(checkEqualorDifferenceorSome(15, 10));
console.log(checkEqualorDifferenceorSome(10, 15));
console.log(checkEqualorDifferenceorSome(7, 8));
console.log(checkEqualorDifferenceorSome(30,15));