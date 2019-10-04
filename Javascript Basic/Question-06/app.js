let year = 2020;
function isLeap(year) {
  return year % 4 === 0 ? (year % 100 !== 0) : (year % 400 === 0);
}
console.log(isLeap(year) === true ? year + ' is leap' : year + ' is not leap.');
console.log(isLeap(2021) === true ? year + ' is leap' : year + ' is not leap.')