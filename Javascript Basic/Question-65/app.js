function finalString(string) {
  if(string.length >= 6) {
    if(string.substring(string.length - 6) === 'Script'){
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
console.log(finalString('JavaScript'));
console.log(finalString('Javascritp'));