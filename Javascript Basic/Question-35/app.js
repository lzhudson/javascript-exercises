function isSpecifiedChar(string, char) {
  let ocurrence = 0;
  string.split('').forEach(element => {
    if(element === char) {
      ocurrence++;
      console.log(ocurrence);
    }
  });
  return ocurrence >= 3 ? `Is ocurrence equal ${ocurrence}` : 'Not ocurrence greater three.';
}
console.log(isSpecifiedChar('oioioioi', 'i'));
