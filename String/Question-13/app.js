function repeatString(string, repeat = 1) {
  for(let i = 0; i < repeat; i++) {
    console.log(string);
  }
}
console.log(repeatString('Ha!'));
console.log(repeatString('Ha!',2));
console.log(repeatString('Ha!', 3));