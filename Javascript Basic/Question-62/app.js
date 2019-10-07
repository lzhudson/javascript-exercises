function moveLastThreeChar(string) {
  if(string.length >= 3) {
    var lastThreeChar = string.substring(string.length - 3, string.length);
    var newString = lastThreeChar + string.substring(0, string.length - 3);
    return newString;
  }
}
console.log(moveLastThreeChar('Hudson'));