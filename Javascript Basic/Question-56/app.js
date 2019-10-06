function copyCharString(string) {
  if(string.length > 3){
    let stringArray = string.split('');
    let lastThreeChar = string.slice(string.length - 3, string.length);
    return lastThreeChar.repeat(3);
  } else {
    return false;
  }
  
}
console.log(copyCharString('hudson'));