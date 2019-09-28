function removeChar(string, valueToRemove) {
  return string.replace(string.charAt(valueToRemove), '');
}
console.log(removeChar('Hudson', 2));