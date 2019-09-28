function isBlank(string) {
  if(string.length === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isBlank(''));
console.log(isBlank('oi'));