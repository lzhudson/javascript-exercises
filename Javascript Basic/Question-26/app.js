function addThreeStringsEndInFront(string) {
  if(string.length <= 3) {
    return string;
   
  } else {
    let threeStringEnd = string.slice(string.length - 3, string.length);
    let newString = threeStringEnd + string.slice(0, string.length - 3);
    return newString;
  }
  
}
console.log(addThreeStringsEndInFront('Hudson'));
console.log(addThreeStringsEndInFront('Unstoppable'));
