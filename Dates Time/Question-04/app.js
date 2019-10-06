function getNameMonth(date) {
  var months = ['Janeiro', 'Fevereiro', 'Março','Abril','Maior', 'Junho','Julho','Agosto', 'Setembro','Outubro','Novembro','Dezembro'];
  return months[date.getMonth()];
}
console.log(getNameMonth(new Date("10/11/2009")));
console.log(getNameMonth(new Date("11/13/2014")));