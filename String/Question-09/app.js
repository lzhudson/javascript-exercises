function capitalizeAllWords(string) {
  return string.split(' ').map(element => {
    return element.charAt(0).toUpperCase() + element.slice(1,);
  }).join(' ');
}
console.log(capitalizeAllWords('oi meu nome é hudson holanda'));