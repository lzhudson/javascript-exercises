function getFirstPartsArray(array, n = 1) {
  if(Array.isArray(array) !== true){
    return false;
  } else {
    return array.slice(0, n);
  }
}
console.log(getFirstPartsArray([1,2,3,4,5]));
console.log(getFirstPartsArray([],3));
console.log(getFirstPartsArray([7, 9, 0, -2],3));
console.log(getFirstPartsArray([7, 9, 0, -2],6));
console.log(getFirstPartsArray([7, 9, 0, -2],-3))