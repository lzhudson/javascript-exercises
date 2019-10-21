function sortArray(array){
  return array.sort(function(a,b){
    return a -b;
  })
}
console.log(sortArray([6,4,0,3,-2,1]));