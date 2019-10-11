function checkTwoNumbers(num1, num2) {
  if((num1 + num2) === 50 || num1 === 50 || num2 === 50) {
    return true;
  } else {
    return false;
  }
}
console.log(checkTwoNumbers(20,30));
console.log(checkTwoNumbers(50, 10));
console.log(checkTwoNumbers(2, 50));
console.log(checkTwoNumbers(10,20));