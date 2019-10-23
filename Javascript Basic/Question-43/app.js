function checkRightNumbersEqual(num1,num2, num3) {
  return (num1 % 10 === num2 % 10) ||
         (num2 % 10 === num3 % 10) ||
         (num1 % 10 === num3 % 10);
}
console.log(checkRightNumbersEqual(30,30,30));
console.log(checkRightNumbersEqual(20, 35, 20));
console.log(checkRightNumbersEqual(20, 20, 13));
console.log(checkRightNumbersEqual(15, 20,20));
console.log(checkRightNumbersEqual(35,32,11));