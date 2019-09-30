function maxAndTwooNumbers(a,b) {
  if((a >= 40 && a <= 60) && (b >= 40 && b <= 60)){
    return Math.max(a,b);
  } else {
    return 'Numbers not between 40 and 60';
  }
}
console.log(maxAndTwooNumbers(40,50));
console.log(maxAndTwooNumbers(10,20));
