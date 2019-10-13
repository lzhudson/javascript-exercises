function removeChar(string, valueToRemove) {
  return string.replace(string.charAt(valueToRemove), '');
}
console.log(removeChar('Hudson', 2));
console.log(removeChar('Python', 3));
console.log(removeChar('Python', 5));