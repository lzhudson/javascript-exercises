function isIntergerThreeNumbers(num1,num2,num3) {
  let numOne = String(num1);
  let numTwo = String(num2)
  let numThree = String(num3);
  numOne = numOne.split('');
  numTwo = numTwo.split('');
  numThree = numThree.split('');
  let lastNumberNumOne = numOne[numOne.length - 1];
  let lastNumberNumTwo = numTwo[numTwo.length - 1];
  let lastNumberNumThree = numThree[numThree.length - 1];
  console.log(lastNumberNumOne, lastNumberNumTwo, lastNumberNumThree);
  if(lastNumberNumOne === lastNumberNumTwo && lastNumberNumOne === lastNumberNumThree) {
    return true;
  } else {
    false;
  }
}
console.log(isIntergerThreeNumbers(123,456,789));