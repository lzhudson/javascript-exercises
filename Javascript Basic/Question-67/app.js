function createNewString(string) {
  if(string[0] === 'P' || string[string.length - 1] === 'P') {
    return string.substring(1, string.length - 1);
  } else {
    return string;
  }
}
console.log(createNewString('Polonia'));
console.log(createNewString('PHP'));
console.log(createNewString('Russia'));