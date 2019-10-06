function extractString(string) {
  if(string.length % 2 === 0){
    return string.split('').slice(0, string.length / 2).join('');
  }
}
console.log(extractString('hudson'));