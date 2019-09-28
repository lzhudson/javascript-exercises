function addPyString(value) {
  if(value.slice(0,2) == 'Py'){
    return value;
  } else {
  return 'Py' + value;
  }
}
console.log(addPyString('Py'));
console.log(addPyString('oi'));