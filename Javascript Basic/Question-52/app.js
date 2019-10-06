function lettersToAlphabeticOrder(string) {
  let stringArray = string.split('');
  stringArray.sort();
  return stringArray;
}
console.log(lettersToAlphabeticOrder('Hudson'));
