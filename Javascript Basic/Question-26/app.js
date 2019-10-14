function addThreeStringsEndInFront(string) {
  if(string.length <= 3) {
    return string;
   
  } else {
    var threeStringEnd = string.slice(string.length - 3, string.length);
    return threeStringEnd + string.slice(0, string.length - 3);
  }
  
}
console.log(addThreeStringsEndInFront('Hudson'));
console.log(addThreeStringsEndInFront('Hud'));
console.log(addThreeStringsEndInFront('Unstoppable'));
