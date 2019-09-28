var word = 'Hello There';
function addFirstCharInitAndEnd(string) {
  var firstChar = string.charAt(0);
  var newString = firstChar + string.slice(0, string.length -1) + firstChar;
  return newString;
}
console.log(addFirstCharInitAndEnd(word));