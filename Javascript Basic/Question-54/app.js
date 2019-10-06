function counterNumVowels(string){
  var numVowels = 0;
  let stringArray = string.split('');
  stringArray.forEach(element => {
    if(element === 'a' || element === 'A' || element === 'e' || element === 'E'
    || element === 'i' || element === 'I' || element === 'o' || element === 'O'
    || element === 'u' || element === 'U'){
      numVowels++;
    }
  });
  return numVowels;
}
console.log(counterNumVowels('hudson'));