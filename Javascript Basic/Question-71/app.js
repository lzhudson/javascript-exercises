function verifyNumberFrequence(array) {
  if(array[0] === 1 || array[array.length - 1] === 1) {
    return true;
  } else {
    return false;
  }
}
console.log(verifyNumberFrequence([1,2,3]));
console.log(verifyNumberFrequence([3,2,1]));
console.log(verifyNumberFrequence([4,5,6]));