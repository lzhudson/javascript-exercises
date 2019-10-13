function newSequence(string) {
  if(string.length > 1) {
    let newfirstChar = string[string.length - 1];
    let newlastChar = string[0]; 
    let newSequence = newfirstChar + string.slice(1, string.length - 1) + newlastChar;
    return newSequence;
  } else {
    return 'Not value equal == 1';
  }
}
console.log(newSequence('Hudson'));
console.log(newSequence('abc'));
console.log(newSequence('ab'));