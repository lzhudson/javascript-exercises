function calculateSum(num1, num2) {
  var sum = num1 === num2 ? (num1 + num2) * 3 : num1 + num2;
  return sum;
}
console.log(calculateSum(20, 30));