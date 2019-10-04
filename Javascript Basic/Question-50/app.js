function capitalizeString(string){
  return string.split(' ').map(function(element){
    return element[0].toUpperCase() + element.slice(1,);
  }).join(' ');
}
console.log(capitalizeString('meu nome é hudson holanda'));