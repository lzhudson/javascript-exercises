let year = 2020;
if(year % 4 === 0) {
  if(year % 100 !== 0) {
    console.log(year + ' is leap.');
  }
} else {
  if(year % 400 === 0) {
    console.log(year + ' is leap.');

  } else {
    console.log(year + ' is not leap.');
  }
}