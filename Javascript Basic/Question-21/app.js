function addPyString(value) {
  return value.slice(0,2 == 'Py') ? value : 'Py' + value;
}
console.log(addPyString('Py'));
console.log(addPyString('oi'));