function examStatus(nota, exameFinal = false) {
  if(exameFinal) {
    return nota >= 90;
  } else {
    return nota >= 90 || nota <= 100;
  }
}
console.log(examStatus(90));
console.log(examStatus(89, true));
console.log(examStatus(90,));