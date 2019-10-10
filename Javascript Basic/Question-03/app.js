let date = new Date();

let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let prefix = month < 10 ? "" : "0";

let output = day + "/" + prefix + (month + 1 ) + "/" + year;

console.log(output);