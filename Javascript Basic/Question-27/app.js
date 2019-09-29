function initStringJava(string) {
  if(string.slice(0,4) === 'Java') {
    return true;
  } else {
    return false;
  }
}
console.log(initStringJava('Javascript'));
console.log(initStringJava('Java'));
console.log(initStringJava('oi'));