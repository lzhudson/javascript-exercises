function convertToThreeFirstCharCase(string) {
  if(string.length <= 3) {
    return string.toUpperCase();
  } else {
    return string.slice(0, 4).toLowerCase() + string.slice(4,);
  }
}
console.log(convertToThreeFirstCharCase('Hudson'));
console.log(convertToThreeFirstCharCase('Hud'));