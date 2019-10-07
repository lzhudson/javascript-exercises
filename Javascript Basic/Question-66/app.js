function showNameCity(city) {
  if(city.substring(0, 3) === 'Los' || city.substring(0, 3) === 'New'){
    return city;
  } else {
    return '';
  }
}
console.log(showNameCity('Los Angeles'));
console.log(showNameCity('New York'));
console.log(showNameCity('California'));