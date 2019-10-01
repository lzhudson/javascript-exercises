function sortaNum(num1, num2) {
  const sumNumbers = num1 + num2;
  if(sumNumbers >= 50 && sumNumbers <= 80) {
    return 65;
  } else {
    return 80;
  }
}
console.log(sortaSum(30,20));
console.log(sortaSum(90,80));