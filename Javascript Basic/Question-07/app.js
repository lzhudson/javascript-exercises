
let daysList = ['Domingo','Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];

for(let i = 2014; i < 2050; i++) {
  let date = new Date(i, 0, 1);
  if(daysList[date.getDay()] === 'Domingo') {
    console.log(date.getFullYear());
  }
}