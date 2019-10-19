function verifySum8OrDiference8(num1, num2) {
  const sumNumbers = num1 + num2;
  const difNumbers = Math.abs(num1 - num2);
  if(num1 === 8 || num2 === 8 || sumNumbers === 8 || difNumbers === 8) {
    return true;
  } else {
    return false;
  }
}
console.log(verifySum8OrDiference8(8,8));
console.log(verifySum8OrDiference8(4,4));
console.log(verifySum8OrDiference8(8,2));
console.log(verifySum8OrDiference8(2,2));