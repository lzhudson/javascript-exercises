function verifyFirstAndLastElementToEqual(array) {
  if(array.length >= 3) {
    if(array[0] === array[array.length - 1]){
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
console.log(verifyFirstAndLastElementToEqual([1,2,1]))
console.log(verifyFirstAndLastElementToEqual([3,2,1]));
console.log(verifyFirstAndLastElementToEqual([1,2]));