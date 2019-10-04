function checkRightNumbersEqual(num1,num2, num3) {
  let numOne = num1.toString().split('');
  let numTwo = num2.toString().split('');
  let numThree = num3.toString().split('');
  if(
    (numOne[numOne.length - 1] === numTwo[numTwo.length - 1]) || 
    (numThree[numThree.length - 1] === numThree[numThree.length - 1]) || 
    (numThree[numThree.length - 1] === numTwo[numTwo.length - 1]) || 
    (numOne[numOne.length - 1] === numTwo[numTwo.length - 1] && numOne[numOne.length - 1] === numThree[numThree.length - 1])) {
      return true
    } else {
      return false;
    }
}
console.log(checkRightNumbersEqual(30,30,30));
console.log(checkRightNumbersEqual(20, 35, 20));
console.log(checkRightNumbersEqual(20, 20, 13));
console.log(checkRightNumbersEqual(15, 20,20));
console.log(checkRightNumbersEqual(35,32,11));