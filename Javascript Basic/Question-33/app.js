function range40And60Or70And100(a,b) {
  if((a >= 40 && a <= 70) && (b >= 40 && b <= 70) ) {
    return 'Numbers range of 40 and 70';
  } else if((a >= 70 && a <= 100) && (b >= 70 && b <= 100)) {
    return 'Numbers range of 70 and 100';
  } else {
    return 'Numbers are not even between 40 and 70 or 70 and 100';
  }
}
console.log(range40And60Or70And100(50, 60));
console.log(range40And60Or70And100(80, 90));
console.log(range40And60Or70And100(20,30));