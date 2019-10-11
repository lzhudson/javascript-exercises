function findLongestString(array) {
  let longString = array[0];
  array.forEach(function(element){
    if(element.length > longString.length) {
      longString = element;
    }
  });
  return longString;
}
console.log(findLongestString(['Hudson', 'Holanda']));