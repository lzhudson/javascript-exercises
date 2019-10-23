function checkEqualNumbers(num1, num2,num3) {
  if(num1 === num2 && num1 === num3) {
    return 30;
  } else if(num1 === num2 || num2 === num3 || num3 === num1){
    return 40;
  }
  return 20;
}
console.log(checkEqualNumbers(10,20,30));
console.log(checkEqualNumbers(10,10, 20));
console.log(checkEqualNumbers(30,30,30));