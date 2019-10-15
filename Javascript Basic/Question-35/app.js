function isSpecifiedChar(string, char) {
  let ocurrence = 0;
  string.split('').forEach(element => {
    if(element === char) {
      ocurrence++;
    }
  });
  return (ocurrence >= 2 && ocurrence <=4);
}
console.log(isSpecifiedChar('oioioioi', 'i'));
console.log(isSpecifiedChar('Coffescript', 'i'));