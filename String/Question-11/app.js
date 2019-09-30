function stringToCamelCase(string) {
  return string.split(' ').map(element =>{
    return element.charAt(0).toUpperCase() + element.slice(1,);
  }).join('');
}
console.log(stringToCamelCase('JavaScript Exercises'));
console.log(stringToCamelCase('JavaScript exercises'));
console.log(stringToCamelCase('JavaScript Exercises'));