function humanizeFormat(value = 1) {
  let sufix = '';
  if(value >= 1 && value < 8){
    sufix = 'st';
  } else if(value >= 8 && value < 30){
    sufix = 'th';
  } else if(value >= 30 && value < 301){
    sufix = 'st';
  } else if(value >= 301 && value <= 402){
    sufix = 'nd';
  }
  return value + sufix;
}
console.log(humanizeFormat());
console.log(humanizeFormat(1));
console.log(humanizeFormat(8));
console.log(humanizeFormat(301));
console.log(humanizeFormat(402));