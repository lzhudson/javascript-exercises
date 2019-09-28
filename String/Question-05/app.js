function abbrevName(string) {
  let stringToArray = string.split(' ');
  let firstName = stringToArray[0];
  let letterLastName = stringToArray[1][0];
  return firstName + ' ' + letterLastName;
}
console.log(abbrevName('Luiz Hudson'));