function curday(separator) {
  var day = new Date();
  return day.getDate() + separator + day.getMonth() + separator + day.getFullYear();
}
console.log(curday('/'));
console.log(curday('-'));