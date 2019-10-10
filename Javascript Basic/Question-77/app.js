function contentInArrayOneOrThree(array) {
  if(array.length > 2) {
    for(var i = 0; i < array.length; i++) {
      if(array[i] === 2 || array[i] === 3){
        return array[i];
      }
    }
  }
} 
console.log(contentInArrayOneOrThree([1,2,3]));
console.log(contentInArrayOneOrThree([4,5,6]));
console.log(contentInArrayOneOrThree([2,3,1]));
