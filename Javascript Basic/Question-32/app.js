function closerOf100(a,b) {
  if(a > b){
    return `${a} is value closer of 100`;
  } else if(b > a) {
    return `${b} is value closer of 100`;
  } else if(a === b) {
    return `${a} and ${b} is equal`;
  }
}
console.log(closerOf100(90, 20));
console.log(closerOf100(20, 30));