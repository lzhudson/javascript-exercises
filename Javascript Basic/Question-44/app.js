function checkEqual20Numbers(num1, num2, num3){
  if((num1 >= 20 && num1 < num2) || (num1 >= 20 && num1 < num3) ||
     (num2 >= 20 && num2 < num3) || (num2 >= 20 && num2 < num3) ||
     (num3 >= 20 && num3 < num2) || (num3 >= 20 && num3 < num1)){
       return true;
  } else {
    return false;
  }
}
console.log(checkEqual20Numbers(10, 20, 30)); // true
console.log(checkEqual20Numbers(30, 20, 15)); // false 
console.log(checkEqual20Numbers(20, 40, 60)); // true
console.log(checkEqual20Numbers(20, 10, 60)); // true
console.log(checkEqual20Numbers(40, 20, 20)); // true
console.log(checkEqual20Numbers(21, 45, 60)); // true