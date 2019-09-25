let dateCurrent = new Date();
let christmas = new Date(2019, 11, 24);
let daysToChristmas = (christmas - dateCurrent) / 86400000;
console.log('Days to Christmas: ' + Math.ceil(daysToChristmas));