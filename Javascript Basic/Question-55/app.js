function numsPAndT(string) {
  let numP = 0;
  let numT = 0;
  let stringArray = string.split('');
  stringArray.forEach(function(element){
    if(element === 'p' || element === 'P') {
      numP++;
    }
    if(element === 't' || element === 'T'){
      numT++;
    }
  });
  return numT === numP;
}
console.log(numsPAndT('ttppTTTTpppp'));
console.log(numsPAndT('tttpp'));