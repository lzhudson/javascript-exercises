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
  if(lastNumberNumOne === lastNumberNumTwo && lastNumberNumOne === lastNumberNumThree) {
    return true;
  } else {
    return false;
  }
}
console.log(isIntergerThreeNumbers(123,456,789));
console.log(isIntergerThreeNumbers(123,453,786));
console.log(isIntergerThreeNumbers(123,453,783));