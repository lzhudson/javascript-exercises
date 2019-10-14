function initStringJava(string) {
  return string.slice(0,4) === 'Java' ? true : false;
}
console.log(initStringJava('Javascript'));
console.log(initStringJava('Java'));
console.log(initStringJava('oi'));