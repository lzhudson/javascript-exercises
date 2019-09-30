function stringUncamelize(string, separator = ' ') {
  if(typeof separator === 'undefined') {
    return string.split('').map(element => {
      if(element === element.toUpperCase()){
        element = separator + element.toLowerCase();
      }
      return element;
    }).join('');
  } else {
    return string.split('').map(element => {
      if(element === element.toUpperCase()){
        element = separator + element.toLowerCase();
      }
      return element;
    }).join('');
  }
}
console.log(stringUncamelize('helloWorld', ));
console.log(stringUncamelize('helloWorld', '-'));
console.log(stringUncamelize('helloWorld', '_'));