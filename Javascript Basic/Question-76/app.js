function createNewArray(array) {
  if(array.length > 1) {
    let newArray = [];
    newArray.push(array[0]);
    newArray.push(array[array.length - 1]);
    return newArray;
  } else {
    return false;
  }
}
console.log(createNewArray([1]));
console.log(createNewArray([1,2]));
console.log(createNewArray([1,2,3]));
console.log(createNewArray([1,2,3,4,5,6]));