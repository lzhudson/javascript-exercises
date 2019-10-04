function checkMutiple7Or11(num1,num2) {
  Math.abs(num1);
  Math.abs(num2);
  if(num1 % 7 === 0 || num1 % 11 === 0){
    return num1;
  } else if(num2 % 7 === 0 || num2 % 11 === 0){
    return num2;
  } else {
    return false;
  }
}
console.log(checkMutiple7Or11(49, 11));
