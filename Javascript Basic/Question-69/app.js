function someThreeElements(array) {
  var sum = array.reduce(function(soma, item) {
    return soma + item;
  });
  return sum;
}
console.log(someThreeElements([2,3,4]));