let date = new Date();

let month = date.setMonth(0);
let dayDate = date.setDate(1);

let daysList = ['Domingo','Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];

for(let i = 2014; i < 2050; i++) {
  let year = date.setFullYear(i);
  if(daysList[date.getDay()] === 'Segunda') {
    console.log(date.getFullYear());
  }
}