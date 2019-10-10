let year = 2020;
let yearTwo = 2021;
function isLeap(year) {
  return year % 4 === 0 ? (year % 100 !== 0) : (year % 400 === 0);
}
console.log(isLeap(year) === true ? year + ' is leap' : year + ' is not leap.');
console.log(isLeap(yearTwo) === true ? yearTwo + ' is leap' : yearTwo + ' is not leap.')